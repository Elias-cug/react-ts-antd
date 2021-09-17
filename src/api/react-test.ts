import { ReactTestReq } from './react-test-type';

import { post } from '@/axios/axios';

export function ReactTestApi (param: ReactTestReq): any {
  return post('/mock/getCount', param);
}
