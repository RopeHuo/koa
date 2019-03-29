const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

app.use(router.routes()).use(router.allowedMethods());
//routes()返回路由器中间件，它调度与请求匹配的路由。
//allowedMethods()处理的业务是当所有路由中间件执行完成之后,若ctx.status为空或者404的时候,丰富response对象的header头.

router.get('/',(ctx,next)=>{
  ctx.response.body = '<h1>首页</h1>'
})
router.get('/my',(ctx,next)=>{
  ctx.response.body = '<h1>联系我们</h1>'
})

app.listen(3000)