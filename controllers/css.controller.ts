
import { Body, Method, MethodConfig, Verbs, MethodError, MethodResult, MethodResultStatus, MethodMock, SecurityContext, Response, Param, MethodPipe } from '@methodus/server';
import { Query as DataQuery, ReturnType, Odm } from '@methodus/data';
import { FontModel } from '../models/font.model';
import * as mime from 'mime';

const S3_BUCKET = process.env.S3_BUCKET;
// const S3_BUCKET_MIN = process.env.S3_BUCKET_MIN;
const S3_REGION = 'us-east-2';
import * as aws from 'aws-sdk';

const s3 = new aws.S3({ signatureVersion: 'v4', region: 'us-east-2' });

@MethodConfig('Css')
export class Css {

    @MethodPipe(Verbs.Get, '/api/font/:id')
    public static async font(@Param('id') id: string, @Response() res): Promise<MethodResult<any>> {
        let key = '';
        const pipedResult = await new Promise<any>(async (resolve, reject) => {

            const queryX = new DataQuery(FontModel);
            queryX.filter({ _id: Odm.applyObjectID(id.split('.')[0]) });
            try {
                const results = await queryX.run(ReturnType.Single);
                if (results) {
                    key = results.key;
                }
                const params = {
                    Bucket: S3_BUCKET,
                    Key: results.key,
                };
                s3.headObject(params, async (err, data) => {
                    if (err) {
                        // an error occurred

                    }
                    const stream = s3.getObject(params).createReadStream();

                    // forward errors
                    stream.on('error', (err: any) => {
                        // continue to the next middlewares
                        console.error(err);
                    });

                    // Add the content type to the response (it's not propagated from the S3 SDK)
                    // res.set('Content-Type', mime.lookup(key));
                    // res.set('Content-Length', data.ContentLength);
                    // res.set('Last-Modified', data.LastModified);
                    // res.set('ETag', data.ETag);

                    stream.on('end', () => {
                        console.log('Served by Amazon S3: ' + key);
                    });

                    // Pipe the s3 object to the response
                    // result.pipe(stream);
                    const result = new MethodResult(stream);
                        // Add the content type to the response (it's not propagated from the S3 SDK)
                    result.setHeader('Content-Type', mime.getType(key));
                    result.setHeader('Content-Length', data.ContentLength);
                    result.setHeader('Last-Modified', data.LastModified);
                    result.setHeader('ETag', data.ETag);

                    resolve(result);
                });
            } catch (ex) {

            }

        });
        return pipedResult;

    }

    @Method(Verbs.Get, '/api/css/:id')
    public static async css(@Param('id') id: string, @Response() res): Promise<MethodResult<any>> {
        const queryX = new DataQuery(FontModel);
        queryX.filter({ user_id: id });
        try {
            const results = await queryX.run();
            let finalString = '';
            results.forEach((font) => {
                const extension = font.key.substring(font.key.lastIndexOf('.') + 1);
                finalString += `
@font-face {
    font-family: "${font.Name}";
    font-style: normal;
    font-weight: normal; /* or 400 */
    src: url("/api/font/${font._id}.${extension}") format("${extension}");
}`;
            });
            const result = new MethodResult(finalString);
            result.headers['Content-Type'] = 'text/css; charset=utf-8';
            return result;
        } catch (error) {
            throw (new MethodError(error));
        }
    }
}
