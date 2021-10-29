const router = require('koa-router')();
const response = require('../../utils/reponse');

function mockTestAxiosDs () {
  const testData = {
    id: 1,
    type: 'A01'
  };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(testData);
    }, 1000);
  });
}

async function getTestAxiosApi (ctx) {
  const data = await mockTestAxiosDs();
  response(ctx, data);
}
router.prefix('/api');
router.get('/', async ctx => {
  ctx.body = 'api';
});
router.get('/getTestAxiosApi', getTestAxiosApi);
router.get('/test', async ctx => {
  ctx.body = 'test';
});

module.exports = router;
