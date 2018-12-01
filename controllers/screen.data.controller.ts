import { MethodConfig, Method, Verbs } from '@methodus/server';
import { ScreenModel } from '../models/screen.model';
import { AuthMiddleware } from './auth.middleware';

/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/
@MethodConfig('Screen', [AuthMiddleware], ScreenModel)
export class ScreensDataController extends DataController {

}
