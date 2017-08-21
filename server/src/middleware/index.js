'use strict';

import compose from 'koa-compose';
import authorization from './authorization';

export default function middleware() {
    return compose(
        [
            authorization()
        ]
    )
}