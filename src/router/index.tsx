import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from './router'

function Routes({routes}) {
  return routes.map(route => (<Route key={route.path} exact path={route.path} component={route.component} />))
}

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