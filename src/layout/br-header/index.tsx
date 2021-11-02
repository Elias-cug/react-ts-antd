import React, { FC } from 'react';
import intl from '@/locales/locales';
import localStore from 'localStorage';
import { getRefreshUrl } from '@/utils/business';
import { useAppSelector } from '@/hooks/redux-hooks';
import { selectUser } from '@/redux/react-redux-test/reducers/userReducer';
const Header: FC = () => {
  const userInfo = useAppSelector(selectUser);

  // const curLang = localStore.getItem('lang') || locale;
  const curLang = userInfo.locale;

  function changeTheme (): void {
    const curTheme = localStore.getItem('theme') || '';
    const theme = curTheme === '' ? 'orange' : '';
    const html = document.querySelector('html');
    html?.setAttribute('data-theme', theme);
    localStore.setItem('theme', theme);
  }

  function onChangeLang (): void {
    const lang = curLang === 'zh-cn' ? 'en-us' : 'zh-cn';
    const url = getRefreshUrl();
    location.href = url;
    localStore.setItem('lang', lang);
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
