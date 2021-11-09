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

// 获取传入元素的高度
export function getDomSize(ele: any): any {
  let strWidth = '';
  let strHeight = '';
  if (!ele) {
    console.error('未传入dom元素');
    return false;
  }
  if (window.getComputedStyle) {
    strWidth = window.getComputedStyle(ele, null)['width'];
    strHeight = window.getComputedStyle(ele, null)['height'];
  } else {
    strWidth = ele.currentStyle['width'];
    strHeight = ele.currentStyle['height'];
  }
  return {
    width: Number(strWidth.substring(0, strWidth.length - 2)),
    height: Number(strHeight.substring(0, strHeight.length - 2)),
  };
}
