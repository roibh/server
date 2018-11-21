

import { Body, Method, MethodConfig, Param, Query, Verbs, MethodError, MethodResult, MethodMock } from '@methodus/server';
import { Query as DataQuery } from '@methodus/data';
import { UserModel } from '../models/user.model';
import { UserMock } from '../mocks/';
import { DataController } from './data.controller';

@MethodConfig('User', [], UserModel)
export class UserController extends DataController {
}


