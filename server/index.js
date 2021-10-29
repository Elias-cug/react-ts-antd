const Koa = require('koa');
const router = require('koa-router')();
const cors = require('koa2-cors');
const testAxios = require('./routes/test-axios/test-axios');

const app = new Koa();

// 处理同源问题
app.use(cors());

router.use(testAxios.routes(), testAxios.allowedMethods());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
console.log('监听3000端口');
