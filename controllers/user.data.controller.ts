

import { Body, Method, MethodConfig, Param, Query, Verbs, MethodError, MethodResult, MethodMock } from '@methodus/server';
import { Query as DataQuery } from '@methodus/data';
import { UserModel } from '../models/user.model';
import { UserMock } from '../mocks/';
/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/

@MethodConfig('User', [], UserModel)
export class UserController extends DataController {
}


