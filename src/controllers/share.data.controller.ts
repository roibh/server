import {
    MethodConfig
} from '@methodus/server';
import { AuthMiddleware } from './auth.middleware';
import { ShareModel } from '../models';
/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/
@MethodConfig('ShareDataController', [AuthMiddleware], '/data/Share')
export class ShareDataController extends DataController {
    constructor() {
        super(new ShareModel(),'Share');
    }

}
