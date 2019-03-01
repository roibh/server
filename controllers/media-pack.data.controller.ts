import { MethodConfig, Method, Verbs, MethodConfigExtend } from '@methodus/server';
import { MediaPackModel } from '../models/media-pack.model';

import { AuthMiddleware } from './auth.middleware';

/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/
@MethodConfig('MediaPack', [AuthMiddleware], MediaPackModel)
@MethodConfigExtend(DataController, 'MediaPack')
export class MediaPack extends DataController {

}
