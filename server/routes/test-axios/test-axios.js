const router = require('koa-router')();
const {
  getTestAxiosA,
  getTestAxiosB,
  getTestAxiosC,
  getTestAxiosD,
  getTestAxiosE,
  getTestAxiosF,

  getTestAxiosErrorA,
  getTestAxiosErrorB,
  getTestAxiosErrorC,
  getTestAxiosErrorD
} = require('../../controller/text-axios');

router.prefix('/api');
router.get('/', async ctx => {
  ctx.body = 'api';
});
router.get('/getTestAxiosA', getTestAxiosA);
router.get('/getTestAxiosB', getTestAxiosB);
router.get('/getTestAxiosC', getTestAxiosC);
router.get('/getTestAxiosD', getTestAxiosD);
router.get('/getTestAxiosE', getTestAxiosE);
router.get('/getTestAxiosF', getTestAxiosF);

router.get('/getTestAxiosErrorA', getTestAxiosErrorA);
router.get('/getTestAxiosErrorB', getTestAxiosErrorB);
router.get('/getTestAxiosErrorC', getTestAxiosErrorC);
router.get('/getTestAxiosErrorD', getTestAxiosErrorD);

module.exports = router;
