import {
    MethodConfig, Files, Method, Verbs, MethodError, MethodResult, SecurityContext,
} from '@methodus/server';

import { LibraryModel } from '../models/library.model';
import * as aws from 'aws-sdk';
import { AuthMiddleware } from './auth.middleware';
import * as moment from 'moment';
import * as uuidv1 from 'uuid/v1';
import * as fs from 'fs';

const S3_BUCKET = process.env.S3_BUCKET;
const S3_BUCKET_MIN = process.env.S3_BUCKET_MIN;
const S3_REGION = 'us-east-2';

const s3 = new aws.S3({ signatureVersion: 'v4', region: 'us-east-2' });

@MethodConfig('Upload', [AuthMiddleware], LibraryModel)
export class Upload {

    @Method(Verbs.Post, '/upload')
    public static async capture(@Files('files') files: any, @SecurityContext() securityContext: any): Promise<MethodResult<any>> {
        if (!files) {
            throw (new MethodError('no data'));
        }
        if (!Array.isArray(files)) {
            files = [files];
        }

        const result = await new Promise((resolve, reject) => {
            files.forEach((file) => {
                const dateKey = moment().format('MM_YYYY');

                const persist_filename = securityContext._id + '/' + dateKey + '/' + `${uuidv1()}_${file.name}`;
                const s3Params = {
                    ACL: 'public-read',
                    Bucket: S3_BUCKET,
                    ContentType: file.mimetype,
                    // Expires: 60,
                    Key: persist_filename,
                };
                s3.getSignedUrl('getObject', s3Params, (rawErr: any, rawData: any) => {
                    const s3ThumbParams = {
                        ACL: 'public-read',
                        Bucket: S3_BUCKET_MIN,
                        ContentType: file.mimetype,
                        // Expires: 60,
                        Key: persist_filename,
                    };
                    s3.getSignedUrl('getObject', s3ThumbParams, (thumberr: any, thumbData: any) => {
                        const returnData = {
                            signedRequest: rawData,
                            thumb: `https://s3.amazonaws.com/${S3_BUCKET_MIN}/${persist_filename}`,
                            thumbSignedRequest: thumbData,
                            url: `https://s3.${S3_REGION}.amazonaws.com/${S3_BUCKET}/${persist_filename}`,
                        };
                        resolve(returnData);
                        const s3obj = new aws.S3({ params: s3Params });
                        s3obj.upload({ Body: file.data } as any).
                            send((err: any, data: any) => {
                                console.log(data);
                            });
                    });
                });
            });
        });
        return new MethodResult(result);
    }

}
