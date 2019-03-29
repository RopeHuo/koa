const Koa = require('koa')
const app = new Koa()

app.use((ctx, next) => {
    //ctx是整个应用的上下文，包含常用的request、response
    //ctx.response代表 HTTP Response。同样地，ctx.request代表 HTTP Request。
    //ctx.response.body可以简写成ctx.body
    ctx.response.body = 'hello world'
})

app.listen(3000)