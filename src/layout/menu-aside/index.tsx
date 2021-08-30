import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import layoutRouter from '../../router/moudles/layout-router';
import { RouteType } from '../../types/router-type';

const { SubMenu } = Menu;
interface SubMenuListProps {
  router: Array<RouteType>;
}

const SubMenuList: FC<SubMenuListProps> = (props: SubMenuListProps) => {
  console.log('渲染了');
  return (
    <div>
      {props.router.map(item => {
        if (item.children && item.children.length > 0) {
          return (
            <SubMenu key={item.path} title={item.meta.title}>
              <SubMenuList router={item.children}></SubMenuList>
            </SubMenu>
          );
        } else {
          return (
            <Menu.Item key={item.path}>
              <Link to={item.path}>{item.meta.title}</Link>
            </Menu.Item>
          );
        }
      })}
    </div>
  );
};

const MenuAside: FC = () => {
  return (
    <div className='menu-aside'>
      <Menu mode='inline' theme='dark'>
        <SubMenuList router={layoutRouter}></SubMenuList>
      </Menu>
    </div>
  );
};

export default MenuAside;
