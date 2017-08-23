import Exchange from '../models/exchange';

class ExchangeControllers {

    async find(ctx) {
        ctx.body = await Exchange.find(ctx);
    }

    async add(ctx) {
        ctx.body = await Exchange.add(ctx);
    }

}

export default new ExchangeControllers()