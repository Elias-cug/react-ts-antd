import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../page/login/index'
const Router =  () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </BrowserRouter>
)

export default Router