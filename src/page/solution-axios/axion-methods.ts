import instance from '@/axios/axios';
import { v4 as uuidv4 } from 'uuid';
import { assign } from 'lodash';

const request = async function (option) {
  const { headers = {} } = option;
  assign(headers, {
    'X-Br-Trace-Id': uuidv4()
  });
  const datas = await instance(option);
  return datas;
};

// get 请求
export const get = async function (url, config) {
  const timestamp = new Date().getTime();
  if (/.*\?.*$/.test(url)) {
    url += '&t=' + timestamp;
  } else {
    url += '?t=' + timestamp;
  }
  const datas = await request(
    assign(
      {
        url
      },
      config
    )
  );
  return datas;
};

// post 请求
export const post = async function (url, data, config) {
  const datas = await request(
    assign(
      {
        url,
        method: 'post',
        data: data
      },
      config
    )
  );
  return datas;
};
