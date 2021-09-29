import qs from 'qs';
// 获取当前页面地址
export const getRefreshUrl = (): string => {
  let path = location.href;
  if (location.search) {
    const params = qs.parse(location.search, { ignoreQueryPrefix: true });
    delete params.locale;
    path = path.replace(/(\?.*)$/, '?' + qs.stringify(params));
  }
  return path;
};
