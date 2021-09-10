import axios from 'axios';

// axios 实例
const instance = axios.create({
  timeout: 10000
});

// 添加请求拦截器
instance.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(response => {
  return response;
});

export default instance;
