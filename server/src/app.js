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
import jwtKoa from 'koa-jwt';
import cors from 'kcors';

// unit
import middleware from './middleware';
import routes from './routes';

const secret = require('./config/secret.json')
const app = new Koa();

app
    .use(logger())
    .use(bodyParser())
    .use(middleware())
    .use(helmet())
    .use(cors())
    .use(mount("/", convert(serve(__dirname + '/public/'))))
    .use(views(__dirname + '/view/', {
        extension: 'html'
    }))
    .use(jwtKoa({
        secret: secret.sign
    }).unless({
        // 不需要驗證的請求路徑
        path: [/^\/api/, /^\/api\/login/, /^\/api\/child/, /^\/dashboard/, /^\/qrcode/]
    }))
    .use(routes())

app.listen(80,
    () => console.log(`✅  The server is running at http://localhost:3000/`)
)

export default app