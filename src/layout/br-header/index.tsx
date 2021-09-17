import React, { FC } from 'react';
import intl from '@/locales/locales';
const Header: FC = () => {
  let isDefaultTheme = true;
  function changeTheme (): void {
    isDefaultTheme = !isDefaultTheme;
    const html = document.querySelector('html');
    let theme = isDefaultTheme ? '' : 'orange';
    html?.setAttribute('data-theme', theme);
  }

  function onChangeLang (): void {
    console.log('object');
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
          <a>切换语言</a>
          {intl.get('name')}
        </span>
        <span className='portrait'></span>
      </div>
    </div>
  );
};

export default Header;
