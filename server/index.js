const Koa = require('koa');
const router = require('koa-router')();
const testAxios = require('./routes/test-axios/test-axios');

const app = new Koa();

router.use(testAxios.routes(), testAxios.allowedMethods());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
console.log('监听3000端口');
