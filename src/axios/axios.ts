import axios from 'axios';

// axios 实例
const instance = axios.create({
  baseURL: '',
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

export const get = instance.get;

export const post = instance.post;

export default instance;
