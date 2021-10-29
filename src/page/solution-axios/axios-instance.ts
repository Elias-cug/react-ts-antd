import axios from 'axios';

const defaultOption = {
  baseURL: 'http://127.0.0.1:3000',
  timeout: 50000
};
const instance = axios.create(defaultOption);

// 请求拦截
instance.interceptors.request.use(
  function (config) {
    console.log('tmp--log--requestconfig');
    console.log(config);
  },
  function (error) {
    console.log('tmp--log--requesterror');
    console.log(error);
  }
);

// 响应拦截
instance.interceptors.response.use(
  function (response) {
    console.log('tmp--log--reponse');
    console.log(response);
  },
  function (error) {
    console.log('tmp--log--reponseerror');
    console.log(error);
  }
);

export default instance;
