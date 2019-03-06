import { MethodConfig, Method, Verbs, MethodResult, MethodConfigExtend, Body, Param, SecurityContext } from '@methodus/server';
import { ScreenModel } from '../models';
import { AuthMiddleware } from './auth.middleware';

/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/
@MethodConfig('ScreensDataController', [AuthMiddleware], ScreenModel)
@MethodConfigExtend(DataController, 'ScreensDataController')
export class ScreensDataController extends DataController {

}
