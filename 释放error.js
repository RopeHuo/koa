const Koa = require('koa');
const app = new Koa();

const handler = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.type = 'html';
        ctx.response.body = '<p>有问题，请与管理员联系</p>';
        ctx.app.emit('error', err, ctx);//释放error事件
    }
};

const main = ctx => {
    ctx.throw(500);
};

app.on('error', function (err) {
    //释放error事件后这里的监听函数才可生效
    console.log('错误', err.message);
    console.log(err);
});

app.use(handler);
app.use(main);
app.listen(3000);