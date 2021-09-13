import intl from 'react-intl-universal';
import zh from './zh.json';
import en from './en.json';

const locales = {
  zh,
  en
};

intl.init({
  currentLocale: 'zh',
  locales: {
    ...locales
  }
});

export default intl;
