import { MethodConfig, MethodConfigExtend } from '@methodus/server';
import { AuthMiddleware } from './auth.middleware';
import { ShareModel } from '../models';

/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/
@MethodConfig('ShareDataController', [AuthMiddleware], ShareModel)
@MethodConfigExtend(DataController)
export class ShareDataController extends DataController {

}
