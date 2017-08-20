'use strict';

//import fs from 'fs';
//import path from 'path';
import compose from 'koa-compose';
import Router from 'koa-router';

import api from './api';
import dashboard from './dashboard';

const router = new Router();

router.get('/', async(ctx, next) => {

    await ctx.render('index', {
        title: 'Koa2',
        message: 'Hello Koa2',
    })

})

router.use('/dashboard', dashboard.routes(), dashboard.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())

router.get('*', async(ctx, next) => {
    ctx.throw(404);
})

//export default router
export default function routes() {
    return compose(
        [
            router.routes(),
            router.allowedMethods()
        ]
    )
}