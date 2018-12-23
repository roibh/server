import { MethodConfig, Method, Verbs, MethodConfigExtend } from '@methodus/server';
import { AuthMiddleware } from './auth.middleware';
import { SlideModel } from '../models';

/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/
@MethodConfig('SlidesDataController', [AuthMiddleware], SlideModel)
@MethodConfigExtend(DataController)
export class SlidesDataController extends DataController {

}
