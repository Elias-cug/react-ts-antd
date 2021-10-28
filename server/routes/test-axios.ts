// const router = require('koa-router')();
import { response } from '../utils/reponse';
const { getArticle, modifyArticle, addArticle, removeArticle } = require('../../controller/articleController.js');

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

router.prefix('/getTestAxiosApi');
router.post('/getTestAxiosApi', getTestAxiosApi);
router.post('/update', modifyArticle);
router.post('/add', addArticle);
router.post('/remove', removeArticle);

module.exports = router;
