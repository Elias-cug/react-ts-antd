const Faker = require('faker');
const { response, resError } = require('../utils/reponse');

// 正常响应
function mockTestAxiosDs() {
  const testData = new Array(10).fill({}).map(() => ({
    id: Faker.datatype.uuid(),
    title: Faker.name.title(),
    content: Faker.random.words(),
  }));
  return new Promise(resolve => {
    // const resTime = Math.random() * 1000 * 5;
    setTimeout(() => {
      resolve(testData);
    }, 200);
  });
}
async function getInfiniteList(ctx) {
  const data = await mockTestAxiosDs();
  response(ctx, data);
}

module.exports = {
  getInfiniteList,
};
