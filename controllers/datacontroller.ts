import { MethodConfigBase, Method, Param, MethodResult, Body, Query, SecurityContext, MethodError, MethodMock } from '@methodus/server';
import { Verbs } from '@methodus/server/src/rest';
import { Query as DataQuery, ObjectId, Odm, DBHandler, ReturnType } from '@methodus/data';
import { Mocks } from './mocks';
import { Upload } from './upload.controller';

@MethodConfigBase('DataController')
export class DataController {
    @Method(Verbs.Get, '/data/:collection/id/:id')
    public static async get(@Param('collection') collectionName: string, @Param('id') id: string): Promise<MethodResult> {
        const queryX = new DataQuery(collectionName).filter({ _id: Odm.applyObjectID(id) });
        const item = await queryX.run(ReturnType.Single);
        return new MethodResult(item);
    }

    @Method(Verbs.Get, '/data/:collection/ids/:ids')
    public static async getSet(@Param('collection') collectionName: string, @Param('ids') ids: string, @SecurityContext() securityContext: any): Promise<MethodResult> {
        const queryX = new DataQuery(collectionName);
        const idsArr = ids.split(',').map((item) => Odm.applyObjectID(item));
        queryX.in('_id', idsArr);

        const results = await queryX.run();
        return new MethodResult(results);
    }

    @Method(Verbs.Post, '/data/:collection/insert')
    public static async create(@Param('collection') collectionName: string, @Body('record') record: any, @SecurityContext() securityContext: any): Promise<MethodResult> {

        record.user_id = securityContext._id;
        const dbConnection = await DBHandler.getConnection();
        const item = await dbConnection.collection(collectionName).insertOne(record);
        return new MethodResult(item.ops[0]);

    }

    @Method(Verbs.Post, '/data/:collection/id/:id')
    public static async update(@Param('collection') collectionName: string, @Param('id') id: string, @Body('record') record: any, @SecurityContext() securityContext: any): Promise<MethodResult> {
        delete record._id;
        const dbConnection = await DBHandler.getConnection();
        const item = await dbConnection.collection(collectionName).findOneAndUpdate({
            _id: Odm.applyObjectID(id),
        },
            { $set: record }, { returnOriginal: true, upsert: true });
        if (item.ok === 1) {
            return new MethodResult(item.value);
        } else {
            throw new MethodError(item);
        }
    }

    @Method(Verbs.Delete, '/data/:collection/id/:id')
    public static async delete(@Param('collection') collectionName: string, @Param('id') id: string, @SecurityContext() securityContext: any): Promise<MethodResult> {
        // extract repository
        const dbConnection = await DBHandler.getConnection();

        const item = await dbConnection.collection(collectionName).findOneAndDelete({ _id: Odm.applyObjectID(id) });

        if (item.value && item.value.resource) {
           await Upload.remove(item.value.resource, securityContext);
        }
        return new MethodResult(item);
    }

    @Method(Verbs.Post, '/data/:collection/search')
    @MethodMock(Mocks.DATA.search.bind(this))
    public static async search(@Param('collection') collectionName: string, @Body('query') queryObject: any, @SecurityContext() securityContext: any): Promise<MethodResult> {
        // extract repository
        if (!queryObject) {
            queryObject = {};
        }

        const queryX = new DataQuery(collectionName);
        queryX.filter(queryObject).filter({ user_id: securityContext._id }).order('Date', 'desc');
        try {
            const results = await queryX.run();
            return new MethodResult(results);
        } catch (error) {
            throw (new MethodError(error));
        }
    }

    @Method(Verbs.Get, '/data/:collection/')
    @MethodMock(Mocks.DATA.query.bind(this))
    public static async query(@Param('collection') collectionName: string, @Query('query') queryObject: any, @SecurityContext() securityContext: any): Promise<MethodResult> {

        if (!queryObject) {
            queryObject = {};
        }

        const queryX = new DataQuery(collectionName);
        queryX.filter(queryObject).filter({ user_id: securityContext._id }).order('Date', 'desc');
        try {
            const results = await queryX.run();
            return new MethodResult(results);
        } catch (error) {
            throw (new MethodError(error));
        }
    }
}
