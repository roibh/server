import {
    MethodConfig, MethodConfigExtend, MethodResult, MethodError,
    Body, SecurityContext, Verbs, Method,
} from '@methodus/server';
import { AuthMiddleware } from './auth.middleware';
import { ShareModel } from '../models';
import { Query as DataQuery } from '@methodus/data';
/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/
@MethodConfig('ShareDataController', [AuthMiddleware], ShareModel)
@MethodConfigExtend(DataController, 'ShareDataController')
export class ShareDataController extends DataController {

}
