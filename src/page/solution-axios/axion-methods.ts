import instance from '@/axios/axios';
import { v4 as uuidv4 } from 'uuid';
import { assign } from 'lodash';

const request = async function (option) {
  const { headers = {} } = option;
  assign(headers, {
    'X-Br-Trace-Id': uuidv4()
  });
  option.headers = headers;
  console.log(headers);
  const datas = await instance(option);
  console.log('request...');
  console.log(datas);
  return datas;
};

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
