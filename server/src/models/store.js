import sql from 'mssql'
import config from '../config/db'

class Store {

    async find(ctx) {
        const pool = await sql.connect(config)
        const result = await sql.query `select * from StoreList`
        console.dir(result)

        await sql.close()
        return result['recordsets']
    }

    async findById(ctx) {
        const pool = await sql.connect(config)

        let result = await pool.request()
            .input('account', sql.NVarChar, ctx.params.id)
            .query('select * from StoreList where account = @account')
        console.dir(result)

        await sql.close()
        return result['recordsets']
    }

    async login(ctx) {
        const pool = await sql.connect(config)
        console.log(ctx)
        let result = await pool.request()
            .input('account', sql.NVarChar, ctx.request.body.storeId)
            .input('password', sql.NVarChar, ctx.request.body.storePwd)
            .query('select * from StoreList where account = @account and password = @password')
        console.dir(result)

        await sql.close()
        return result['recordsets']
    }
}

export default new Store()