const Koa = require('koa');
const app = new Koa();

const main = function(ctx) {
    				//读取cookie//没有返回0
  const n = Number(ctx.cookies.get('view') || 0) + 1;
  ctx.cookies.set('view', n);//设置cookie
  ctx.response.body = n + ' views';//显示cookie
}

app.use(main);
app.listen(3000);