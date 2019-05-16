
import { Body, Method, MethodConfig, Verbs, MethodError, MethodResult } from '@methodus/server';
import { Query as DataQuery } from '@methodus/data';
import { UserModel, SubscriptionModel } from '..';

@MethodConfig('Admin')
export class Admin {
    @Method(Verbs.Post, '/admin/users')

    public static async users(@Body('query') queryObject: any): Promise<MethodResult<any>> {
        if (!queryObject) {
            queryObject = {};
        }

        const queryX = new DataQuery(UserModel);
        queryX.filter(queryObject).filter(queryObject);
        try {
            const results = await queryX.run();
            return new MethodResult(results);
        } catch (error) {
            throw (new MethodError(error));
        }
    }

}
