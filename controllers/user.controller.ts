/*

____ _  _ ____ _ ___  ____
[__  |_/  |__/ | |__] |  |
___] | \_ |  \ | |__] |__|
*/

import { Body, Method, MethodConfig, Param, Query, Verbs, MethodError, MethodResult, MethodMock } from '@methodus/server';
import { Query as DataQuery } from '@methodus/data';
import { AutoLogger } from 'logelas';
import { UserModel } from '../models/user.model';
import { UserMock } from '../mocks/';

@MethodConfig('UserController')
export class User {
    @MethodMock(UserMock.list)
    @Method(Verbs.Get, '/users/list')
    public static async list():
        Promise<MethodResult<UserModel[]>> {
        try {
            const listResults = await UserModel.query(new DataQuery(UserModel).filter({}));
            return new MethodResult(listResults);
        } catch (error) {
            AutoLogger.error(error);
        }
    }

    @MethodMock(UserMock.get)
    @Method(Verbs.Get, '/users/userid/:user_id')
    public static async get(@Param('user_id') userId: string):
        Promise<MethodResult<UserModel>> {
        try {
            const listResults = await UserModel.query(new DataQuery(UserModel).filter({ _id: userId }));
            return new MethodResult(listResults[0]);
        } catch (error) {
            AutoLogger.error(error);
        }
    }
}
