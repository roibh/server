import { MethodConfig, Method, Verbs, MethodConfigExtend } from '@methodus/server';
import { ScreenModel } from '../models/screen.model';
import { AuthMiddleware } from './auth.middleware';

/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/
@MethodConfig('ScreensDataController', [AuthMiddleware], ScreenModel)
@MethodConfigExtend(DataController)
export class ScreensDataController extends DataController {

}
