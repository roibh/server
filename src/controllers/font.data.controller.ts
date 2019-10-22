import { MethodConfig } from '@methodus/server';
import { FontModel } from '../models/font.model';
import { AuthMiddleware } from './auth.middleware';
/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/

@MethodConfig('Font', [AuthMiddleware], '/data/Font')
export class Font extends DataController {
    constructor() {
        super(new FontModel(),'Font');
    }
}
