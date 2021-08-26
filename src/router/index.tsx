import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from './moudles'
import { RouteType } from "./model/router-type";

interface RoutesProps {
  routes: RouteType[]
}

const Routes: React.FC<RoutesProps> = (props: RoutesProps) => (
  <div>
    {(props.routes.map(route => (
      <Route key={route.path} exact path={route.path} component={route.component} />
    )))}
  </div>
)

const Router =  () => {
  return (
    <BrowserRouter>
      <Switch>
        <Routes routes={routes} />
      </Switch>
    </BrowserRouter>
  )
}


export default Router