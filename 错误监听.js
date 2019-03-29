const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    ctx.throw(500);
};
app.on('error', (err, ctx) => {
    //如果有报错的话会走这里
    console.error('错误', err);//err是错误源头
});

app.use(main);
app.listen(3000);