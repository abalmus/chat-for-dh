import 'reflect-metadata';
import { Core } from 'odi';
import { join } from 'path';

const port = 8080;
const socket = true;
const sources = __dirname;
const staticOptions = {
    root: join(__dirname, '../../client'),
    prefix: '/client'
};

new Core({
    server: {
        port,
        socket,
        static: staticOptions
    },
    sources
}).listen();
