import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import next from 'next';

import { URL } from '../constants';
import { connect as connectToDb } from './db';

function initHttpServer() {
    createServer((req: IncomingMessage, res: ServerResponse) => {
        if (!req.url) {
            console.error('Missing request URL');
            handle(req, res);
            return;
        }

        const parsedUrl = parse(req.url, true);

        handle(req, res, parsedUrl);
    }).listen(URL.PORT.HTTP, () => {
        console.log(
            `> HTTP server ready on http://${URL.DOMAIN}:${URL.PORT.HTTP}`,
        );
    });
}

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
    try {
        initHttpServer();
        await connectToDb();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
});
