
/**
 * S3Sizer does the job of calculating the size of S3 folders.
 * @param {object} params Options to be used when creating the object.
 * @config {string} [params.configFile] File path of aws configuration file.
 * @config {string} [params.accessKeyId] AWS access key id.
 * @config {string} [params.secretAccessKey] AWS secret access key. If
 * accessKeyId is included then secretAccessKey must also be included.
 * @config {string} [params.region] The AWS region to make calls against.
 */
export class S3Sizer {
    constructor(public s3Client: any) {

    }

    public getFolderSize(bucket: any, folder: any, callback: any) {
        this.getFolderSizeInternal(bucket, folder, callback);
    }

    public getFolderSizeInternal(bucket, folder, marker, callback?) {
        const self = this;
        const params: any = {
            Bucket: bucket,
            Prefix: folder + '/',
        };
        if (typeof marker === 'function') {
            callback = marker;
            marker = null;
        }
        if (marker !== null) {
            params.Marker = marker;
        }

        this.s3Client.listObjects(params, (err, data) => {
            if (err) {
                return callback(err, null);
            }
            let size = 0;
            if (data.hasOwnProperty('Contents')) {
                size = self.calculateObjectsSize(data.Contents);
            }
            if (!data.IsTruncated) {
                return callback(null, size);
            }
            marker = data.Contents[data.Contents.length - 1].Key;
            self.getFolderSizeInternal(bucket, folder, marker, (err, nsize) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, size + nsize);
            });
        });
    }

    public calculateObjectsSize(objects) {
        let size = 0;
        for (const obj of objects) {
            size += obj.Size;
        }
        return size;
    }

}
