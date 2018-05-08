const debug = require('debug')('ag:server');
const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const logger = require('koa-logger');
const path = require('path');
const home = require('./server/index.js');

const handleErrors = require('./server/handle-errors.js');
const inlineAndMinify = require('./server/inline-min.js');

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5000;

app.proxy = true;
app.use(logger());


if (process.env.NODE_ENV !== 'production') {
   app.use(require('koa-static')(path.resolve(process.cwd(), 'public')));
}

app.use(handleErrors);
app.use(async function (ctx, next) {
  ctx.state.env = {
    isProduction,
    iconPrefix: 'http://interactive.ftchinese.com/'
  }
  await next();
});
app.use(inlineAndMinify);

router.use('/', home.routes());


app.use(router.routes());

const server = app.listen(port);
server.on('listening', () => {
	debug(`Client listening on port ${port}`);
});
// Logging server error.
server.on('error', (error) => {
  debug(error);
});