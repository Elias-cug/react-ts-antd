const Mock = require('mockjs');

const userInfo = {
  username: 'elias_lee',
  userId: 816,
  lang: 'zh-cn',
  userRole: 2,
  theme: '',
  email: 'elias@lee.com'
};

const getUserInfo = Mock.mock('/user/getUserInfo', userInfo);

module.exports = {
  getUserInfo
};
