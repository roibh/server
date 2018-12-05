import { MethodConfigBase, Method, Param, MethodResult, Body, SecurityContext } from '@methodus/server';
import { Verbs } from '@methodus/server/src/rest';
import { Query as DataQuery } from '@methodus/data';

@MethodConfigBase('DataController')
export class DataController {

    @Method(Verbs.Get, '/id/:id')
    public static async get(@Param('id') id: string): Promise<MethodResult<any>> {
        const repo = (this as any).methodus.repository;
        const item = await repo.get(id);
        return new MethodResult(item);
    }

    @Method(Verbs.Post, '/insert')
    public static async create(@Body('record') record: any, @SecurityContext() securityContext: any): Promise<MethodResult<any>> {
        const repo = (this as any).methodus.repository;
        record.user_id = securityContext._id;
        const item = await repo.insert(record);
        return new MethodResult(item);
    }

    @Method(Verbs.Post, '/id/:id')
    public static async update(@Param('id') id: string, @Body('record') record: any): Promise<MethodResult<any>> {
        const repo = (this as any).methodus.repository;
        const item = await repo.update({ _id: id }, record);
        return new MethodResult(item);
    }

    @Method(Verbs.Delete, '/id/:id')
    public static async delete(@Param('id') id: string): Promise<MethodResult<any>> {
        const repo = (this as any).methodus.repository;
        const item = await repo.delete({ _id: id });
        return new MethodResult(item);
    }

    @Method(Verbs.Post, '/query')
    public static async query(@Body('query') queryObject: any, @SecurityContext() securityContext: any): Promise<MethodResult<any>> {
        const repo = (this as any).methodus.repository;
        const query = new DataQuery(repo.odm.collectionName);
        query.filter(queryObject).filter({ user_id: securityContext._id });
        const item = await repo.query(query);
        return new MethodResult(item);
    }
}
