import { MethodConfig, Method, Verbs, MethodConfigExtend } from '@methodus/server';
import { AuthMiddleware } from './auth.middleware';
import { ScheduleModel } from '../models';

/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/
@MethodConfig('ScheduleDataController', [AuthMiddleware], ScheduleModel)
@MethodConfigExtend(DataController, 'ScheduleDataController')
export class ScheduleDataController extends DataController {

}
