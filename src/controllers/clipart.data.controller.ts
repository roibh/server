import { MethodConfig, MethodConfigExtend } from '@methodus/server';
import { ClipArtModel } from '../models/clipart.model';
import { AuthMiddleware } from './auth.middleware';
/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/

@MethodConfig('ClipArt', [AuthMiddleware], ClipArtModel)
@MethodConfigExtend(DataController, 'ClipArt')
export class ClipArt extends DataController {

}
