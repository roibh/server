
import {
    ServerConfiguration, PluginConfiguration,
    ClientConfiguration, ConfiguredServer, MethodType, ServerType,
    RouterConfiguration,
    TransportType, BuiltInServers, BuiltInTransports,
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
    ClipArt, Font, Admin,
} from './controllers/';
import { MediaPack } from './controllers/media-pack.data.controller';
import { WebFont } from './controllers/webfont.contract';
import { PixaBay } from './controllers/pixabay.contract';
import { StockDataController } from './controllers/stock.data.controller';
import { OpenClipart } from './controllers/openclipart.contract';

DBHandler.config = configuration;

@ServerConfiguration(BuiltInServers.Express, { port: process.env.PORT || 6299 })

// @PluginConfiguration('@methodus/describe')
@PluginConfiguration(path.join(__dirname, 'static'), { path: '/', clientPath: '/public' })

@RouterConfiguration(UserController, ServerType.Express)
@RouterConfiguration(AuthController, ServerType.Express)
@RouterConfiguration(Playlist, ServerType.Express)
@RouterConfiguration(ScreensDataController, ServerType.Express)
@RouterConfiguration(MediaPack, ServerType.Express)
@RouterConfiguration(LibraryDataController, ServerType.Express)
@RouterConfiguration(Upload, ServerType.Express)
@RouterConfiguration(SlidesDataController, ServerType.Express)
@RouterConfiguration(PlayerController, ServerType.Express)
@RouterConfiguration(ShareDataController, ServerType.Express)
@RouterConfiguration(ScreenGroupDataController, ServerType.Express)
@RouterConfiguration(ScheduleDataController, ServerType.Express)
@RouterConfiguration(Font, ServerType.Express)
@RouterConfiguration(ClipArt, ServerType.Express)
@RouterConfiguration(Css, ServerType.Express)
@RouterConfiguration(StockDataController, ServerType.Express)
@RouterConfiguration(Admin, ServerType.Express)

@ClientConfiguration(WebFont, BuiltInTransports.Http, 'https://fonts.googleapis.com')
@ClientConfiguration(PixaBay, BuiltInTransports.Http, 'https://pixabay.com/api')
@ClientConfiguration(OpenClipart, BuiltInTransports.Http, 'https://openclipart.org')
class SetupServer extends ConfiguredServer {
    constructor() {
        super(SetupServer);
    }
}

(global as any).signNature = new SetupServer();
