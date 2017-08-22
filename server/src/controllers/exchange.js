import Exchange from '../models/exchange';

class ExchangeControllers {

    async add(ctx) {
        ctx.body = await Exchange.add(ctx);
    }

}

export default new ExchangeControllers()