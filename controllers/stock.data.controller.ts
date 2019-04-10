import { MethodConfig, Verbs, Method, MethodResult, Query, Body, SecurityContext } from '@methodus/server';
import { AuthMiddleware } from './auth.middleware';
import { PixaBay } from './pixabay.contract';
import * as aws from 'aws-sdk';
import * as mime from 'mime';
import * as request from 'request';
import * as bl from 'bl';

import * as moment from 'moment';
import * as uuidv1 from 'uuid/v1';
import { LibraryModel } from '../models';
import { OpenClipart } from './openclipart.contract';
import { SIGVTALRM } from 'constants';
import { ClipArtModel } from '../models/clipart.model';
const S3_BUCKET = process.env.S3_BUCKET;
// const S3_BUCKET_MIN = process.env.S3_BUCKET_MIN;
const S3_REGION = 'us-east-2';
const s3 = new aws.S3({ signatureVersion: 'v4', region: 'us-east-2' });

@MethodConfig('StockDataController', [AuthMiddleware])
export class StockDataController {
    @Method(Verbs.Get, '/stock/')
    public static async search(@Query('q') q: string,
                               @Query('page') page: number = 1,
                               @Query('per_page') per_page: number = 50,
                               @Query('order') order?: string,
                               @Query('image_type') image_type?: string,
                               @Query('orientation') orientation?: string,
                               @Query('category') category?: string): Promise<MethodResult<any>> {
        const response = await PixaBay.search(process.env.PIXABAY, q);
        response.result.hits = response.result.hits.map((hit) => {
            return {
                MediaType: 'image',
                id: hit.id,
                largeImageURL: hit.largeImageURL,
                resource: hit.previewURL,
                tags: hit.tags,
                webformatURL: hit.webformatURL,
                webformatHeight: hit.webformatHeight,
                webformatWidth: hit.webformatWidth,

            };
        });
        return new MethodResult(response.result);
    }
    @Method(Verbs.Get, '/clipart/')
    public static async clipart(@Query('q') q: string,
                                @Query('page') page: number = 1,
                                @Query('per_page') per_page: number = 50,
                                @Query('order') order: string= 'date',
                                @Query('image_type') image_type?: string,
                                @Query('orientation') orientation?: string,
                                @Query('category') category?: string): Promise<MethodResult<any>> {
        const response = await OpenClipart.search(q, page, per_page, order);

        response.result = {
            hits: response.result.payload.map((hit) => {
                return {
                    MediaType: 'image',
                    id: hit.id,
                    largeImageURL: hit.svg.url,
                    title: hit.title,
                    thumb: hit.svg.png_thumb,
                    resource: hit.svg.url,
                    webformatURL: hit.svg.url,
                    webformatHeight: hit.dimensions.png_full_lossy.height,
                    webformatWidth: hit.dimensions.png_full_lossy.width,
                    tags: hit.tags_array.join(','),
                };
            }),
        };

        // response.result.hits = response.result.hits.map((hit) => {
        //     return {
        //         MediaType: 'image',
        //         id: hit.id,
        //         largeImageURL: hit.largeImageURL,
        //         resource: hit.previewURL,
        //         tags: hit.tags,
        //         webformatURL: hit.webformatURL,
        //         webformatHeight: hit.webformatHeight,
        //         webformatWidth: hit.webformatWidth,

        //     };
        // });
        return new MethodResult(response.result);
    }
    @Method(Verbs.Get, '/stock/categories')
    public static async categories(): Promise<MethodResult<any>> {
        const result = [
            'fashion', 'nature', 'backgrounds', 'science', 'education',
            'people', 'feelings', 'religion', 'health', 'places', 'animals',
            'industry', 'food', 'computer', 'sports', 'transportation', 'travel',
            'buildings', 'business', 'music',
        ];

        return new MethodResult(result);
    }

    @Method(Verbs.Post, '/stock/import/image')
    public static async importImage(@Body('image') image: any, @SecurityContext() securityContext: any): Promise<MethodResult<any>> {

        const promiseResult = new Promise((resolve, reject) => {

            const regexp = /filename=\"(.*)\"/gi;
            let fileName = '';
            let mimeType = '';
            request
                .get(image.webformatURL)
                .on('response', (response) => {
                    if (response.headers['content-disposition'] &&
                        response.headers['content-disposition'] !== 'inline') {
                        fileName = regexp.exec(response.headers['content-disposition'])[1];
                    } else {
                        fileName = image.title;
                    }
                    mimeType = response.headers['content-type'];
                })
                .pipe(bl((error, data) => {

                    const dateKey = moment().format('MM_YYYY');
                    const persist_filename = securityContext._id + '/' + dateKey + '/' + `${image.id}`;

                    const s3Params = {
                        ACL: 'public-read',
                        Bucket: S3_BUCKET,
                        ContentType: mimeType,
                        // Expires: 60,
                        Key: persist_filename,
                    };

                    s3.getSignedUrl('getObject', s3Params, (rawErr: any, rawData: any) => {
                        const returnData = {
                            key: persist_filename,
                            signedRequest: rawData,
                            url: `https://s3.${S3_REGION}.amazonaws.com/${S3_BUCKET}/${persist_filename}`,
                        };
                        const s3obj = new aws.S3({ params: s3Params });
                        s3obj.upload({ Body: data } as any).
                            send((err: any, data: any) => {
                                resolve(returnData);
                            });

                        // });
                    });

                }));

        });
        const uploadResult: any = await promiseResult;

        // insert into local library
        const insertResult = await LibraryModel.insert({
            user_id: securityContext._id,
            width: image.webformatWidth,
            height: image.webformatHeight,
            thumb: uploadResult.url,
            resource: uploadResult.url,
            Date: new Date(),
            MediaType: 'image',
        });
        return new MethodResult(insertResult);
    }

    @Method(Verbs.Post, '/stock/import/clipart')
    public static async importClipart(@Body('image') image: any, @SecurityContext() securityContext: any): Promise<MethodResult<any>> {

        const promiseResult = new Promise((resolve, reject) => {

            const regexp = /filename=\"(.*)\"/gi;
            let fileName = '';
            let mimeType = '';
            request
                .get(image.webformatURL)
                .on('response', (response) => {
                    if (response.headers['content-disposition'] &&
                        response.headers['content-disposition'] !== 'inline') {
                        fileName = regexp.exec(response.headers['content-disposition'])[1];
                    } else {
                        fileName = image.title;
                    }
                    mimeType = response.headers['content-type'];
                })
                .pipe(bl((error, data) => {

                    const dateKey = moment().format('MM_YYYY');
                    const persist_filename = securityContext._id + '/' + dateKey + '/' + `${image.id}`;

                    const s3Params = {
                        ACL: 'public-read',
                        Bucket: S3_BUCKET,
                        ContentType: mimeType,
                        // Expires: 60,
                        Key: persist_filename,
                    };

                    s3.getSignedUrl('getObject', s3Params, (rawErr: any, rawData: any) => {
                        const returnData = {
                            key: persist_filename,
                            signedRequest: rawData,
                            url: `https://s3.${S3_REGION}.amazonaws.com/${S3_BUCKET}/${persist_filename}`,
                        };
                        const s3obj = new aws.S3({ params: s3Params });
                        s3obj.upload({ Body: data } as any).
                            send((err: any, data: any) => {
                                resolve(returnData);
                            });

                        // });
                    });

                }));

        });
        const uploadResult: any = await promiseResult;

        // insert into local library
        const insertResult = await ClipArtModel.insert({
            user_id: securityContext._id,
            width: image.webformatWidth,
            height: image.webformatHeight,
            thumb: uploadResult.url,
            resource: uploadResult.url,
            Date: new Date(),
            MediaType: 'image',
        });
        return new MethodResult(insertResult);
    }

    @Method(Verbs.Post, '/stock/import/video')
    public static async importVideo(@Body('image') image: any, @SecurityContext() securityContext: any): Promise<MethodResult<any>> {

        const promiseResult = new Promise((resolve, reject) => {

            const regexp = /filename=\"(.*)\"/gi;
            let fileName = '';
            let mimeType = '';
            request
                .get(image.webformatURL)
                .on('response', (response) => {
                    if (response.headers['content-disposition'] &&
                        response.headers['content-disposition'] !== 'inline') {
                        fileName = regexp.exec(response.headers['content-disposition'])[1];
                    } else {
                        fileName = image.title;
                    }
                    mimeType = response.headers['content-type'];
                })
                .pipe(bl((error, data) => {

                    const dateKey = moment().format('MM_YYYY');
                    const persist_filename = securityContext._id + '/' + dateKey + '/' + `${image.id}`;

                    const s3Params = {
                        ACL: 'public-read',
                        Bucket: S3_BUCKET,
                        ContentType: mimeType,
                        // Expires: 60,
                        Key: persist_filename,
                    };

                    s3.getSignedUrl('getObject', s3Params, (rawErr: any, rawData: any) => {
                        const returnData = {
                            key: persist_filename,
                            signedRequest: rawData,
                            url: `https://s3.${S3_REGION}.amazonaws.com/${S3_BUCKET}/${persist_filename}`,
                        };
                        const s3obj = new aws.S3({ params: s3Params });
                        s3obj.upload({ Body: data } as any).
                            send((err: any, data: any) => {
                                resolve(returnData);
                            });

                        // });
                    });

                }));

        });
        const uploadResult: any = await promiseResult;

        // insert into local library
        const insertResult = await LibraryModel.insert({
            user_id: securityContext._id,
            width: image.webformatWidth,
            height: image.webformatHeight,
            thumb: uploadResult.url,
            resource: uploadResult.url,
            Date: new Date(),
            MediaType: 'image',
        });
        return new MethodResult(insertResult);
    }

}
