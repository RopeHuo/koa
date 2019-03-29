const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router()

app.use(router.routes()).use(router.allowedMethods());

router.get('/cdx', (ctx, next) => {
    ctx.response.redirect('/');
})
router.get('/', (ctx, next) => {
    ctx.body = 'Hello World';
})

app.listen(3000);