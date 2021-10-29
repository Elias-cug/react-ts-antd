const response = require('../utils/reponse');

function mockTestAxiosDs (id) {
  const testData = {
    id: id,
    type: Math.random() * 10
  };
  return new Promise(resolve => {
    const resTime = Math.random() * 1000 * 5;
    setTimeout(() => {
      resolve(testData);
    }, resTime);
  });
}

async function getTestAxiosApi (ctx) {
  const data = await mockTestAxiosDs(0);
  response(ctx, data);
}

async function getTestAxiosA (ctx) {
  const data = await mockTestAxiosDs(1);
  response(ctx, data);
}

async function getTestAxiosB (ctx) {
  const data = await mockTestAxiosDs(2);
  response(ctx, data);
}

async function getTestAxiosC (ctx) {
  const data = await mockTestAxiosDs(3);
  response(ctx, data);
}

module.exports = { getTestAxiosApi, getTestAxiosA, getTestAxiosB, getTestAxiosC };
