import React, { ReactNode, FC } from 'react';
import BrHeader from './br-header';
import MenuAside from './menu-aside';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = (props: MainLayoutProps) => {
  return (
    <div className='container'>
      你好
      <BrHeader></BrHeader>
      <div className='main-container-wrapper'>
        <MenuAside></MenuAside>
        <div className='main-content'>{props.children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
