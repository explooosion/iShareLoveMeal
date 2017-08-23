import sql from 'mssql'
import config from '../config/db'

class Exchange {

    async find(ctx) {
        const pool = await sql.connect(config)
        const result = await sql.query `select * from ExchangeList order by id desc`
        console.dir(result)

        await sql.close()
        return result['recordsets']
    }

    async add(ctx) {
        const pool = await sql.connect(config)

        // 剩餘點數 = 原有點數 - 使用點數
        const resPoint = Number(ctx.request.body.point) - Number(ctx.request.body.pointCost)

        // Reduce Point
        let reReduce = await pool.request()
            .input('account', sql.NVarChar, ctx.request.body.childId)
            .input('point', sql.Int, resPoint)
            .query(`update ChildList set point = @point where account = @account`)
        console.dir(reReduce)

        // Add Log
        let reLog = await pool.request()
            .input('childAccount', sql.NVarChar, ctx.request.body.childId)
            .input('storeAccount', sql.NVarChar, ctx.request.body.storeId)
            .input('point', sql.Int, ctx.request.body.pointCost)
            .input('time', sql.NVarChar, ctx.request.body.time)
            .query(`insert into ExchangeList ( childAccount, storeAccount, point, time ) 
                        values ( @childAccount, @storeAccount, @point, @time )`)
        console.dir(reLog)

        await sql.close()
        return reLog['recordsets']
    }

}

export default new Exchange()