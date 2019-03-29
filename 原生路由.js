const Koa = require('koa')
const app = new Koa()
app.use((ctx, next) => {
    if (ctx.request.url == '/') {//通过ctx.request.url获取用户请求路径
        ctx.body = '<h1>首页</h1>'
    } else if (ctx.request.url == '/my') {
        ctx.body = '<h1>联系我们</h1>'
    } else {
        ctx.body = '<h1>404 not found</h1>'
    }
})
app.listen(3000)