const response = require('../utils/reponse');

function mockTestAxiosDs (id) {
  const testData = {
    id: id,
    type: Math.ceil(Math.random() * 6)
  };
  return new Promise(resolve => {
    const resTime = Math.random() * 1000 * 5;
    setTimeout(() => {
      resolve(testData);
    }, resTime);
  });
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

async function getTestAxiosD (ctx) {
  const data = await mockTestAxiosDs(4);
  response(ctx, data);
}

async function getTestAxiosE (ctx) {
  const data = await mockTestAxiosDs(5);
  response(ctx, data);
}

async function getTestAxiosF (ctx) {
  const data = await mockTestAxiosDs(6);
  response(ctx, data);
}

module.exports = {
  getTestAxiosA,
  getTestAxiosB,
  getTestAxiosC,
  getTestAxiosD,
  getTestAxiosE,
  getTestAxiosF
};
