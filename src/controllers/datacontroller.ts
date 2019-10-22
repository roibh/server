import {
    Method, Param, Verbs, MethodResult, Body,
    Query, SecurityContext, MethodError, MethodMock, Injector, MethodConfigBase,
} from '@methodus/server';
import { Query as DataQuery, ObjectId, Odm, DBHandler, ReturnType, Repo } from '@methodus/data';
import { Mocks } from './mocks';
import { Upload } from './upload.controller';

@MethodConfigBase('DataController')
export class DataController {
    constructor(public repository: Repo<any>, public collectionName: string) {

    }
    @Method(Verbs.Get, '/id/:id')
    public async get(
        @Param('id') id: string): Promise<MethodResult> {
        const queryX = new DataQuery(this.collectionName).filter({ _id: Odm.applyObjectID(id) });
        const item = await queryX.run(ReturnType.Single);
        return new MethodResult(item);
    }

    @Method(Verbs.Get, '/ids/:ids')
    public async getSet(
        @Param('ids') ids: string,
        @SecurityContext() securityContext: any): Promise<MethodResult> {
        const queryX = new DataQuery(this.collectionName);
        const idsArr = ids.split(',').map((item) => Odm.applyObjectID(item));
        queryX.in('_id', idsArr);

        const results = await queryX.run();
        return new MethodResult(results);
    }

    @Method(Verbs.Post, '/insert')
    public async create(
        @Body('record') record: any,
        @SecurityContext() securityContext: any): Promise<MethodResult> {

        record.user_id = securityContext._id;
        const dbConnection = await DBHandler.getConnection();
        const item = await dbConnection.collection(this.collectionName).insertOne(record);
        return new MethodResult(item.ops[0]);

    }

    @Method(Verbs.Post, '/id/:id')
    public async update(
        @Param('id') id: string,
        @Body('record') record: any,
        @SecurityContext() securityContext: any): Promise<MethodResult> {
        delete record._id;
        const dbConnection = await DBHandler.getConnection();
        const item = await dbConnection.collection(this.collectionName).findOneAndUpdate({
            _id: Odm.applyObjectID(id),
        },
            { $set: record }, { returnOriginal: true, upsert: true });
        if (item.ok === 1) {
            return new MethodResult(item.value);
        } else {
            throw new MethodError(item);
        }
    }

    @Method(Verbs.Delete, '/id/:id')
    public async delete(@Param('id') id: string, @SecurityContext() securityContext: any): Promise<MethodResult> {
        // extract repository
        const dbConnection = await DBHandler.getConnection();

        const item = await dbConnection.collection(this.collectionName).findOneAndDelete({ _id: Odm.applyObjectID(id) });

        if (item.value && item.value.resource) {
            const upload = Injector.get('Upload');
            await upload.remove(item.value.resource, securityContext);
        }
        return new MethodResult(item);
    }

    @Method(Verbs.Post, '/search')
    @MethodMock(Mocks.DATA.search.bind(this))
    public async search(@Body('query') queryObject: any, @SecurityContext() securityContext: any): Promise<MethodResult> {
        // extract repository
        if (!queryObject) {
            queryObject = {};
        }

        const queryX = new DataQuery(this.collectionName);
        queryX.filter(queryObject).filter({ user_id: securityContext._id }).order('Date', 'desc');
        try {
            const results = await queryX.run();
            return new MethodResult(results);
        } catch (error) {
            throw (new MethodError(error));
        }
    }

    @Method(Verbs.Get, '/')
    @MethodMock(Mocks.DATA.query.bind(this))
    public async query(@Query('query') queryObject: any, @SecurityContext() securityContext: any): Promise<MethodResult> {

        if (!queryObject) {
            queryObject = {};
        }

        const queryX = new DataQuery(this.collectionName);
        queryX.filter(queryObject).filter({ user_id: securityContext._id }).order('Date', 'desc');
        try {
            const results = await queryX.run();
            return new MethodResult(results);
        } catch (error) {
            throw (new MethodError(error));
        }
    }
}
