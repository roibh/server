import { MethodConfig } from '@methodus/server';
import { ScreenGroupModel } from '../models';
import { AuthMiddleware } from './auth.middleware';

/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/
@MethodConfig('ScreenGroupDataController', [AuthMiddleware], '/data/ScreenGroup')
export class ScreenGroupDataController extends DataController {
    constructor() {
        super(new ScreenGroupModel(),'ScreenGroup');
    }
}
