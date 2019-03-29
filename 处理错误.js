const Koa = require('koa');
const app = new Koa();

const handler = async (ctx, next) => {
    try {
        await next();//执行下个中间件
    } catch (err) {
        //如果main中间件是有问题的会走这里
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.body = {
            message: err.message//把错误信息返回到页面
        };
    }
};

const main = ctx => {
    ctx.throw(500);//如果这里是没有问题的就正常执行，如果有问题会走catach
};

app.use(handler);
app.use(main);
app.listen(3000);