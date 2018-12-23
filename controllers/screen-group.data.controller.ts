import { MethodConfig, Method, Verbs, MethodConfigExtend } from '@methodus/server';
import { ScreenGroupModel } from '../models';
import { AuthMiddleware } from './auth.middleware';

/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/
@MethodConfig('ScreenGroupDataController', [AuthMiddleware], ScreenGroupModel)
@MethodConfigExtend(DataController)
export class ScreenGroupDataController extends DataController {

}
