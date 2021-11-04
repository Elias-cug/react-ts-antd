import axios from 'axios';

const defaultOption = {
  baseURL: '/api',
  timeout: 50000
};
const instance = axios.create(defaultOption);

// 请求拦截
instance.interceptors.request.use(
  function (config) {
    // console.log('tmp--log--requestconfig');
    // console.log(config);
    return config;
  },
  function (error) {
    console.log('tmp--log--requesterror');
    console.log(error);
  }
);

// 响应拦截
instance.interceptors.response.use(
  function (res) {
    // console.log('tmp--log--reponse');
    // console.log(response);

    const data = res.data;
    if (data.code === 200) {
      return data.result;
    } else {
      return Promise.reject('错误的响应');
    }
  },
  function (error) {
    console.log('tmp--log--reponseerror');
    console.log(error);
  }
);

export const CancelToken = axios.CancelToken;
export const isCancel = axios.isCancel;
export default instance;
