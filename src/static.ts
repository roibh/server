import * as path from 'path';
import { BuiltInServers } from '@methodus/server';

export function init(config, pluginOptions) {
    config.run(BuiltInServers.Express, {
        onStart: (instance) => {
            const options = {
                etag: true,
                extensions: ['woff', 'woff2', 'ttf', 'eot'],
                index: ['index.html', 'player.html', 'admin.html'],
                maxAge: '1d',
                redirect: false,
                setHeaders: (res) => {
                    res.set('x-timestamp', Date.now());
                },
            };
            const clientDir = path.resolve(path.join(__dirname, '..', pluginOptions.clientPath));
            instance.use(pluginOptions.path, BuiltInServers.Express.static(clientDir, options));

            const playerDir = path.resolve(path.join(__dirname, '..', pluginOptions.clientPath + '_player'));
            instance.use(pluginOptions.path + '_player', BuiltInServers.Express.static(playerDir, options));

            const adminDir = path.resolve(path.join(__dirname, '..', pluginOptions.clientPath + '_admin'));

            instance.use(pluginOptions.path + '_admin', BuiltInServers.Express.static(adminDir, options));

        },
    });
    return config;
}
