'use strict';

// koa
import Koa from 'koa';
import views from 'koa-views';
import mount from 'koa-mount';
import serve from 'koa-static';
import logger from 'koa-logger';
import convert from 'koa-convert';
import bodyParser from 'koa-bodyparser';
import helmet from 'koa-helmet';
import cors from 'kcors';

// unit
import middleware from './middleware';
import routes from './routes';

const app = new Koa();

app
    .use(logger())
    .use(bodyParser())
    .use(helmet())
    .use(cors())
    .use(mount("/", convert(serve(__dirname + '/public/'))))
    .use(views(__dirname + '/view/', {
        // extension: 'ejs'
        // extension: 'pug'
        extension: 'html' // use Angular4
    }))
    .use(middleware())
    .use(routes());

app.listen(3000, () => console.log(`✅  The server is running at http://localhost:3000/`))

export default app