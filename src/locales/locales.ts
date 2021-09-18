import intl from 'react-intl-universal';
import localStore from 'localStorage';
require('intl/locale-data/jsonp/en.js');
require('intl/locale-data/jsonp/zh.js');
//  国际化语言包，这里是自建的部分
const locales: any = {
  'en-us': require('./en-us.json'),
  'zh-cn': require('./zh-cn.json')
};

const lang = localStore.getItem('lang');

console.log('当前语言：', lang);

intl.init({
  currentLocale: lang || 'zh-cn',
  locales
});

console.log('国际化测试');
console.log(intl.get('name'));

export default intl;
