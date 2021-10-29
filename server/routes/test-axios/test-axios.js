const router = require('koa-router')();
const { getTestAxiosApi, getTestAxiosA, getTestAxiosB, getTestAxiosC } = require('../../controller/text-axios');

router.prefix('/api');
router.get('/', async ctx => {
  ctx.body = 'api';
});
router.get('/getTestAxiosApi', getTestAxiosApi);
router.get('/getTestAxiosA', getTestAxiosA);
router.get('/getTestAxiosB', getTestAxiosB);
router.get('/getTestAxiosC', getTestAxiosC);

module.exports = router;
