import { MethodConfig } from '@methodus/server';
import { PlaylistModel } from '../models';
import { AuthMiddleware } from './auth.middleware';

/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/
@MethodConfig('Playlist', [AuthMiddleware], '/data/Playlist')
export class Playlist extends DataController {
    constructor() {
        super(new PlaylistModel(),'Playlist');
    }
}
