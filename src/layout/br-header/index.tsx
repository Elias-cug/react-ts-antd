import React from 'react';

function Header () {
  let isDefaultTheme = true;
  function changeTheme () {
    isDefaultTheme = !isDefaultTheme;
    const html = document.querySelector('html');
    let theme = isDefaultTheme ? '' : 'orange';
    html?.setAttribute('data-theme', theme);
  }
  return (
    <div className='header'>
      <span className='title'>Hello World, Good Morning! Good Afternoon! Good Night!</span>
      <div className='theme-change' onClick={changeTheme}>
        切换皮肤
      </div>
    </div>
  );
}

export default Header;
