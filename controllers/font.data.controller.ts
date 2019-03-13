import { MethodConfig, MethodConfigExtend } from '@methodus/server';
import { FontModel } from '../models/font.model';
import { AuthMiddleware } from './auth.middleware';
/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/

@MethodConfig('Font', [AuthMiddleware], FontModel)
@MethodConfigExtend(DataController, 'Font')
export class Font extends DataController {

}
