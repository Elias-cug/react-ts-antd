import settingRouter from "./setting-router"
import commonRoute from "./common-router"
import { RouteType } from '../model/router-type'
const routesHasChild = [...commonRoute, settingRouter]
const routes: RouteType[]= []

handleRouter(routesHasChild)
console.log(routes);

function handleRouter(route: RouteType[] | RouteType){
  if(Array.isArray(route)) {
    route.forEach(item => {
      handleRouter(item)
    })
  } else if(route.children) {
    route.children.forEach(item => {
      handleRouter(item)
    })
  } else {
    routes.push(route)
  }
}

export default routes