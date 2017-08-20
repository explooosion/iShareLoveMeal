import Child from '../models/child';

class ChildControllers {

    /**
     * sql query select
     * @param {ctx} Koa Context 
     */
    async find(ctx) {
        ctx.body = await Child.find(ctx);
    }

    async findById(ctx) {
        ctx.body = await Child.findById(ctx);
    }

}

export default new ChildControllers()