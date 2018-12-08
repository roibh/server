
import {
    ServerConfiguration, PluginConfiguration,
    ClientConfiguration, ConfiguredServer, MethodType, ServerType,
} from '@methodus/server';



export * from './models/';
import * as path from 'path';
import { DBHandler } from '@methodus/data';
import { configuration } from './db/config';
import { AuthController, UserController, ScreensDataController } from './controllers/';
import { Playlist } from './controllers/playlist.data.controller';

DBHandler.config = configuration;

@ServerConfiguration(ServerType.Express, { port: process.env.PORT || 6299 })
@PluginConfiguration('@methodus/describe')
@PluginConfiguration(path.join(__dirname, 'static'), { path: '/', clientPath: '/public' })
@ClientConfiguration(UserController, MethodType.Local, ServerType.Express)
@ClientConfiguration(AuthController, MethodType.Local, ServerType.Express)
@ClientConfiguration(Playlist, MethodType.Local, ServerType.Express)
@ClientConfiguration(ScreensDataController, MethodType.Local, ServerType.Express)
class SetupServer extends ConfiguredServer {
    constructor() {
        super(SetupServer);
    }
}

(global as any).signNature = new SetupServer();
