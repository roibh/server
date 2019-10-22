import { MethodConfig } from '@methodus/server';
import { AuthMiddleware } from './auth.middleware';
import { ScheduleModel } from '../models';

/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/
@MethodConfig('ScheduleDataController', [AuthMiddleware], '/data/Schedule')
export class ScheduleDataController extends DataController {
    constructor() {
        super(new ScheduleModel(),'Schedule');
    }
}
