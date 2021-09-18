import { CommonRes } from './common-type';
import { post } from '@/axios/axios';

interface UserInfoType extends CommonRes {
  result?: {
    username?: string;
    userId?: string | number;
    lang?: string;
    userRole?: string | number;
    theme?: string;
    email?: string;
  };
}

export const getUserInfo = () => {
  return new Promise((resolve, reject) => {
    post('/user/getUserInfo', {})
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
