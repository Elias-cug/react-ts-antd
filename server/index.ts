const Koa = require('koa');

const router = require('koa-router')();

const app = new Koa();

function getUserInfoApi () {
  return new Promise((resolve, reject) => {
    const userInfo = {
      name: 'liyish'
    };
    setTimeout(() => {
      resolve(userInfo);
    }, 3000);
  });
}

async function getUserInfo (ctx) {
  const userInfo = await getUserInfoApi();
  ctx.body = userInfo;
}
router.get('/api/getUserInfo', getUserInfo);

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
console.log('监听3000端口');
