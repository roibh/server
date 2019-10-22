import { MethodConfig } from '@methodus/server';
import { ScreenModel } from '../models';
import { AuthMiddleware } from './auth.middleware';

/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/
@MethodConfig('ScreensDataController', [AuthMiddleware], '/data/Screen')
export class ScreensDataController extends DataController {
    constructor() {
        super(new ScreenModel(), 'Screen');
    }

}
