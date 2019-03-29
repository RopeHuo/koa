const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.throw(500);//这个时候你访问首页会报一个500的错误(内部服务器错误)
};

app.use(main);
app.listen(3000);