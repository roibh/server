import { MethodConfigBase, Method, Param, MethodResult, Body, SecurityContext, MethodError, Query, MethodMock } from '@methodus/server';
import { Verbs } from '@methodus/server/src/rest';
import { Query as DataQuery, ObjectId, Odm } from '@methodus/data';
import { Mocks } from './mocks';

@MethodConfigBase('DataController')
export class DataController {
    @Method(Verbs.Get, '/id/:id')
    public static async get(@Param('id') id: string): Promise<MethodResult<any>> {
        // extract repository
        const repo = (this as any).repository;
        const item = await repo.get(id);
        return new MethodResult(item);
    }

    @Method(Verbs.Get, '/ids/:ids')
    public static async getSet(@Param('ids') ids: string, @SecurityContext() securityContext: any): Promise<MethodResult<any>> {
        // extract repository
        const repo = (this as any).repository;
        const queryX = new DataQuery(repo.odm.collectionName);
        const idsArr = ids.split(',').map((item) => Odm.applyObjectID(item));
        queryX.in('_id', idsArr);
        // .filter({ user_id: securityContext._id });
        const results = await queryX.run();
        return new MethodResult(results);
    }

    @Method(Verbs.Post, '/insert')
    // tslint:disable-next-line:max-line-length
    public static async create(@Body('record') record: any, @SecurityContext() securityContext: any): Promise<MethodResult<any>> {
        // extract repository
        const repo = (this as any).repository;
        record.user_id = securityContext._id;
        const item = await repo.insert(record);
        return new MethodResult(item);
    }

    @Method(Verbs.Post, '/id/:id')
    public static async update(@Param('id') id: string, @Body('record') record: any): Promise<MethodResult<any>> {
        // extract repository
        const repo = (this as any).repository;
        const item = await repo.update({ _id: id }, record);
        return new MethodResult(item);
    }

    @Method(Verbs.Delete, '/id/:id')
    public static async delete(@Param('id') id: string): Promise<MethodResult<any>> {
        // extract repository
        const repo = (this as any).repository;
        const item = await repo.delete({ _id: id });
        return new MethodResult(item);
    }

    @Method(Verbs.Post, '/search')
    @MethodMock(Mocks.DATA.search.bind(this))
    public static async search(@Body('query') queryObject: any, @SecurityContext() securityContext: any): Promise<MethodResult<any>> {
        // extract repository
        if (!queryObject) {
            queryObject = {};
        }
        const repo = (this as any).repository;
        const queryX = new DataQuery(repo.odm.collectionName);
        queryX.filter(queryObject);
        try {
            const results = await queryX.run();
            return new MethodResult(results);
        } catch (error) {
            throw (new MethodError(error));
        }
    }

    @Method(Verbs.Post, '/query')
    @MethodMock(Mocks.DATA.query.bind(this))
    // tslint:disable-next-line:max-line-length
    public static async query(@Body('query') queryObject: any, @SecurityContext() securityContext: any): Promise<MethodResult<any>> {
        // extract repository
        if (!queryObject) {
            queryObject = {};
        }
        const repo = (this as any).repository;
        const queryX = new DataQuery(repo.odm.collectionName);
        queryX.filter(queryObject).filter({ user_id: securityContext._id });
        try {
            const results = await queryX.run();
            return new MethodResult(results);
        } catch (error) {
            throw (new MethodError(error));
        }
    }
}
