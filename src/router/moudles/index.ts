import settingRouter from "./setting-router"
import commonRoute from "./common-router"
interface Route {
  path: string,
  isExact?: boolean,
  component?: any,
  meta: any,
  children?: Route[]
}
const routesHasChild= [...commonRoute, settingRouter]
const routes: Route[]= []

handleRouter(routesHasChild)
function handleRouter(route: Route[] | Route){
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