import React, { FC } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import R from './moudles';
import MainLayout from '../layout';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact to='/test/ant-form' from='/'></Redirect>
        {R.noLayoutRouter.map(item => (
          <Route key={item.path} exact path={item.path} component={item.component}></Route>
        ))}
        <MainLayout>
          {R.layoutRouter.map(item => (
            <Route key={item.path} exact path={item.path} component={item.component}></Route>
          ))}
        </MainLayout>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
