'use strict';

import Router from 'koa-router';
import jwt from 'jsonwebtoken';
import util from 'util';

import ChildControllers from '../controllers/child';
import StoreControllers from '../controllers/store';

const verify = util.promisify(jwt.verify) // 解密 
const secret = require('../config/secret.json')

const router = new Router();

// GET /api/
router.get('/', async(ctx, next) => {
    ctx.body = {
        status: true
    }
})

router.post('/login', async(ctx, next) => {
    const user = ctx.request.body
    if (user && user.Username) {
        const userToken = {
            name: user.Username,
            password: user.Password
        }
        const token = jwt.sign(userToken, secret.sign, {
            expiresIn: '1h'
        })
        ctx.body = {
            message: '成功取得 token',
            token
        }
    } else {
        ctx.body = {
            message: '參數錯誤',
        }
    }
})

router.get('/res', async(ctx, next) => {
    const user = ctx.user
    if (user) {
        ctx.body = {
            message: '認證成功',
            user
        }
    } else {
        ctx.body = {
            message: '取得資料失敗，沒有 token'
        }
    }
})

// child
router.get('/child', ChildControllers.find)
router.get('/child/:id', ChildControllers.findById)
router.post('/child/login', ChildControllers.login)

// store
router.post('/store/login', StoreControllers.login)

export default router;