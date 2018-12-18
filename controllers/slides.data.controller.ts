import { MethodConfig, Method, Verbs, MethodConfigExtend } from '@methodus/server';
import { AuthMiddleware } from './auth.middleware';

/*start custom*/
import { DataController } from './datacontroller';
import { SlideModel } from '../models/slide.model';
/*end custom*/
@MethodConfig('SlidesDataController', [AuthMiddleware], SlideModel)
@MethodConfigExtend(DataController)
export class SlidesDataController extends DataController {

}
