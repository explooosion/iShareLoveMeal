'use strict';

import Router from 'koa-router';


import jwt from '../middleware/jwt';

import ChildControllers from '../controllers/child';


const router = new Router();

// GET /api/
router.get('/', async(ctx, next) => {

    ctx.body = {
        "status": true
    }
})

router.get('/child', ChildControllers.find)
router.get('/child/:id', ChildControllers.findById)

export default router;