import intl from 'react-intl-universal';
import localStore from 'localStorage';
require('intl/locale-data/jsonp/en.js');
require('intl/locale-data/jsonp/zh.js');
const locales: any = {
  'en-us': require('./en-us.json'),
  'zh-cn': require('./zh-cn.json')
};

const lang = localStore.getItem('lang');

intl.init({
  currentLocale: lang || 'zh-cn',
  locales
});

export default intl;
