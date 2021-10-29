import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import layoutRouter from '@/router/moudles/layout-router';
import { RouteType } from '@/types/router-type';

const { SubMenu } = Menu;
interface SubMenuListProps {
  router: Array<RouteType>;
}

const defaultOpenKeys = ['/base-component', '/chart-component', '/other', '/react-use', '/axios-use', '/solution-css'];

const SubMenuList: FC<SubMenuListProps> = (props: SubMenuListProps) => {
  console.log('渲染了SubMenuList');
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
  console.log('渲染了MenuAside');
  return (
    <div className='menu-aside'>
      <Menu mode='inline' theme='dark' defaultOpenKeys={defaultOpenKeys}>
        {layoutRouter.map(item => {
          if (item.children && item.children.length > 0) {
            return (
              <SubMenu key={item.path} title={item.meta.title}>
                {item.children.map(item => {
                  return (
                    <Menu.Item key={item.path}>
                      <Link to={item.path}>{item.meta.title}</Link>
                    </Menu.Item>
                  );
                })}
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

        {/* <SubMenuList router={layoutRouter}></SubMenuList> */}
      </Menu>
    </div>
  );
};

export default MenuAside;
