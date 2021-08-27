import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from './moudles'
import { RouteType } from "./model/router-type";

interface RoutesProps {
  routes: RouteType[]
}

const Routes: FC<RoutesProps> = (props: RoutesProps) => (
  <div>
    {(props.routes.map(route => (
      <Route key={route.path} exact path={route.path} component={route.component} />
    )))}
  </div>
)

const Router: FC =  () => {
  return (
    <BrowserRouter>
      <Switch>
        <div className="app">
          {/* header */}
          <div className="header"></div>
          <div className="container">
            {/* 菜单 */}
            <div className="aside-menu"></div>
            {/* 带布局页面 */}
            <div className="main-box">
              <Routes routes={routes} />
            </div>
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  )
}


export default Router