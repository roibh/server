
import {
    ServerConfiguration, PluginConfiguration,
    ClientConfiguration, ConfiguredServer, MethodType, ServerType,
} from '@methodus/server';

export * from './models/';
import * as path from 'path';
import { DBHandler } from '@methodus/data';
import { configuration } from './db/config';
import {
    ShareDataController, ScreenGroupDataController,
    LibraryDataController, Playlist, AuthController, UserController,
    ScreensDataController, Upload, SlidesDataController,
    PlayerController, ScheduleDataController, Css,
    ClipArt, Font,
} from './controllers/';
import { MediaPack } from './controllers/media-pack.data.controller';

DBHandler.config = configuration;

@ServerConfiguration(ServerType.Express, { port: process.env.PORT || 6299 })
@PluginConfiguration('@methodus/describe')
@PluginConfiguration(path.join(__dirname, 'static'), { path: '/', clientPath: '/public' })
@ClientConfiguration(UserController, MethodType.Local, ServerType.Express)
@ClientConfiguration(AuthController, MethodType.Local, ServerType.Express)
@ClientConfiguration(Playlist, MethodType.Local, ServerType.Express)
@ClientConfiguration(ScreensDataController, MethodType.Local, ServerType.Express)
@ClientConfiguration(MediaPack, MethodType.Local, ServerType.Express)
@ClientConfiguration(LibraryDataController, MethodType.Local, ServerType.Express)
@ClientConfiguration(Upload, MethodType.Local, ServerType.Express)
@ClientConfiguration(SlidesDataController, MethodType.Local, ServerType.Express)
@ClientConfiguration(PlayerController, MethodType.Local, ServerType.Express)
@ClientConfiguration(ShareDataController, MethodType.Local, ServerType.Express)
@ClientConfiguration(ScreenGroupDataController, MethodType.Local, ServerType.Express)
@ClientConfiguration(ScheduleDataController, MethodType.Local, ServerType.Express)
@ClientConfiguration(Font, MethodType.Local, ServerType.Express)
@ClientConfiguration(ClipArt, MethodType.Local, ServerType.Express)
@ClientConfiguration(Css, MethodType.Local, ServerType.Express)
class SetupServer extends ConfiguredServer {
    constructor() {
        super(SetupServer);
    }
}

(global as any).signNature = new SetupServer();
