import Child from '../models/child';

class ChildControllers {

    /**
     * 
     * sql query select all
     * @param {ctx} Koa Context 
     * @memberof ChildControllers
     */
    async find(ctx) {
        ctx.body = await Child.find(ctx);
    }

    /**
     * 
     * sql qurey select by id
     * @param {ctx} Koa Context 
     * @memberof ChildControllers
     */
    async findById(ctx) {
        ctx.body = await Child.findById(ctx);
    }

}

export default new ChildControllers()