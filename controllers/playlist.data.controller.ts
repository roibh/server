import { MethodConfig, Method, Verbs, MethodConfigExtend } from '@methodus/server';
import { PlaylistModel } from '../models/playlist.model';
import { AuthMiddleware } from './auth.middleware';

/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/
@MethodConfig('Playlist', [AuthMiddleware], PlaylistModel)
@MethodConfigExtend(DataController)
export class Playlist extends DataController {

}
