const Koa = require('koa')
const koaLogger = require('./logger/koa-logger')
const app = new Koa();

app.use(koaLogger)
app.listen(3000)