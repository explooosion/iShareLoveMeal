import jwt from 'jsonwebtoken'
import util from 'util';

const secret = require('../config/secret.json')
const verify = util.promisify(jwt.verify)

export default function authorization() {
    return async function (ctx, next) {
        try {
            const token = ctx.header.authorization
            if (token) {
                let payload
                try {
                    payload = await verify(token, secret.sign)
                    console.log('payload：', payload)
                    ctx.user = {
                        name: payload.name,
                        password: payload.password
                    }
                } catch (err) {
                    console.log('token verify fail：'.err)
                }
            }

            console.log(`token: ${token}`)
            await next()

        } catch (err) {
            if (err.status === 401) {
                ctx.body = {
                    message: 'author - 驗證失敗'
                }
            } else {
                err.status = 404
                ctx.body = '404'
                console.log('author 404：', err)
            }
        }
    }
}