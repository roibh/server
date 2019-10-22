import { MethodConfig } from '@methodus/server';
import { MediaPackModel } from '../models/media-pack.model';

import { AuthMiddleware } from './auth.middleware';

/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/
@MethodConfig('MediaPack', [AuthMiddleware], '/data/MediaPack')
export class MediaPack extends DataController {
    constructor() {
        super(new MediaPackModel(), 'MediaPack');
    }
}
