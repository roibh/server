import {
    MethodConfig, Files, Method, Verbs, MethodError, MethodResult, SecurityContext, Query,
} from '@methodus/server';

import * as aws from 'aws-sdk';
import { AuthMiddleware } from './auth.middleware';
import * as moment from 'moment';
import * as uuidv1 from 'uuid/v1';
import { S3Sizer } from './logic/s3sizer';
const S3_BUCKET = process.env.S3_BUCKET;
// const S3_BUCKET_MIN = process.env.S3_BUCKET_MIN;
const S3_REGION = 'us-east-2';
const s3 = new aws.S3({ signatureVersion: 'v4', region: 'us-east-2' });

@MethodConfig('Upload', [AuthMiddleware])
export class Upload {
    @Method(Verbs.Get, '/usersize')
    public static async usersize(@Query('z') dummy: string, @SecurityContext() securityContext: any): Promise<MethodResult<any>> {
        const s3Sizer = new S3Sizer(s3);
        const size = await new Promise((resolve, reject) => {
            s3Sizer.getFolderSize(S3_BUCKET, securityContext._id, (err: any, size: any) => {
                if (err) {
                    reject(err);
                }
                resolve(size / 1024 / 1024);
            });
        });

        return new MethodResult(size);
    }

    @Method(Verbs.Post, '/upload')
    // tslint:disable-next-line:max-line-length
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

                const ActiveBucket = S3_BUCKET;
                // grab extension
                // const arr = file.name.split('.');
                // const ext = arr[arr.length - 1];
                // const resizeArr = ['jpg', 'png', 'gif' ];
                // if (resizeArr.indexOf(ext) === -1) {
                //     ActiveBucket = S3_BUCKET;
                // }

                const persist_filename = securityContext._id + '/' + dateKey + '/' + `${uuidv1()}_${file.name}`;

                const s3Params = {
                    ACL: 'public-read',
                    Bucket: S3_BUCKET,
                    ContentType: file.mimetype,
                    // Expires: 60,
                    Key: persist_filename,
                };
                // s3.getSignedUrl('getObject', s3Params, (rawErr: any, rawData: any) => {
                //     const s3ThumbParams = {
                //         ACL: 'public-read',
                //         Bucket: ActiveBucket,
                //         ContentType: file.mimetype,
                //         // Expires: 60,
                //         Key: persist_filename,
                //     };
                s3.getSignedUrl('getObject', s3Params, (rawErr: any, rawData: any) => {
                    const returnData = {
                        key: persist_filename,
                        signedRequest: rawData,
                        url: `https://s3.${S3_REGION}.amazonaws.com/${S3_BUCKET}/${persist_filename}`,
                    };
                    const s3obj = new aws.S3({ params: s3Params });
                    s3obj.upload({ Body: file.data } as any).
                        send((err: any, data: any) => {
                            resolve(returnData);
                        });

                    // });
                });
            });
        });
        return new MethodResult(result);
    }

}
