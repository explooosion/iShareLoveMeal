import sql from 'mssql'
import config from '../config'

class Child {

    async find(ctx) {
        const pool = await sql.connect(config)
        const result = await sql.query `select * from ChildList`
        console.dir(result)

        await sql.close()
        return result['recordsets']
    }

    async findById(ctx) {
        const pool = await sql.connect(config)

        let result = await pool.request()
            .input('account', sql.NVarChar, ctx.params.id)
            .query('select * from ChildList where account = @account')
        console.dir(result)

        await sql.close()
        return result['recordsets']
    }

}

export default new Child()