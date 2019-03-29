const Koa = require('koa');
const koaBody = require('koa-body');
const Router = require('koa-router');
const fs = require('fs');
const path = require('path');
const router = new Router()
const app = new Koa();

app.use(koaBody({
    multipart: true,//解析多部分主体，默认false
    formidable: {
        maxFileSize: 200 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
    }
}));

app.use(router.routes()).use(router.allowedMethods());

router.post('/uploadfile', (ctx, next) => {
    // 上传单个文件
    const file = ctx.request.files.file; // 获取上传文件
    // 创建可读流
    const reader = fs.createReadStream(file.path);
    let filePath = path.join(__dirname, 'data/') + `/${file.name}`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
    return ctx.body = "上传成功！";
});

app.listen(3000)