const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    ctx.response.status = 404;//response返回的状态码就是404
    ctx.response.body = 'Page Not Found';//让页面中显示该内容
};

app.use(main);
app.listen(3000);