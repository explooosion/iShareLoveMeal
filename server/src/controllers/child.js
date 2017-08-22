import Child from '../models/child';

class ChildControllers {

    async find(ctx) {
        ctx.body = await Child.find(ctx);
    }

    async findById(ctx) {
        ctx.body = await Child.findById(ctx);
    }

    async login(ctx) {
        ctx.body = await Child.login(ctx);
    }
}

export default new ChildControllers()