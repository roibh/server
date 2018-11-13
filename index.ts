
import {
    ServerConfiguration, PluginConfiguration,
    ClientConfiguration, ConfiguredServer, MethodType, ServerType,
} from '@methodus/server';

export * from './models/';
import * as path from 'path';
import { DBHandler } from '@methodus/data';
import { configuration } from './db/config';
import { SignNature } from './controllers/sign-nature';

DBHandler.config = configuration;

@ServerConfiguration(ServerType.Express, { port: process.env.PORT || 6299 })
@PluginConfiguration('@methodus/describe')
@PluginConfiguration(path.join(__dirname, 'static'), { path: '/sign-nature' })
@ClientConfiguration(SignNature, MethodType.Local, ServerType.Express)
class SetupServer extends ConfiguredServer {

}

(global as any).signNature = new SetupServer();
