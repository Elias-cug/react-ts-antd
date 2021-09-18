import React, { FC } from 'react';
import intl from '@/locales/locales';
import localStore from 'localStorage';
import { getRefreshUrl } from '@/utils/business';
const Header: FC = () => {
  const curLang = localStore.getItem('lang') || 'zh-cn';
  const curTheme = localStore.getItem('theme') || '';
  function changeTheme (): void {
    const theme = curTheme === '' ? 'orange' : '';
    const html = document.querySelector('html');
    html?.setAttribute('data-theme', theme);
  }

  function onChangeLang (): void {
    const lang = curLang === 'zh-cn' ? 'en-us' : 'zh-cn';
    const url = getRefreshUrl();
    localStore.setItem('lang', lang);
    location.href = url;
  }
  return (
    <div className='header'>
      <div className='header-left'>
        <span className='hero1'></span>
        <span className='hero2'></span>
        <span className='hero3'></span>
      </div>
      <div className='header-title'>Hello World, Good Morning! Good Afternoon! Good Night!</div>
      <div className='header-right'>
        <span className='mr10' onClick={changeTheme}>
          <a>切换皮肤</a>
        </span>
        <span className='mr10' onClick={onChangeLang}>
          <a>{curLang}</a>
        </span>
        <span title={intl.get('name')} className='portrait'></span>
      </div>
    </div>
  );
};

export default Header;
