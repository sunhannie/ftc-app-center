const debug = require('debug')('apn:home');
const Router = require('koa-router');
const router = new Router();
const render = require('../util/render.js');


router.get('/', async function (ctx, next) {

  ctx.body = await render('index.html', ctx.state);

  return await next();
});



module.exports = router;