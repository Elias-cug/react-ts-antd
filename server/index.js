var Koa = require('koa');

var router = require('koa-router')();

var app = new Koa();

router.get('/api/getUserInfo', async ctx => {
  const userInfo = {
    name: 'xiaoli',
    age: '18',
    sex: '男'
  };
  ctx.body = userInfo;
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
