import settingRouter from "./moudles/setting-router"
import commonRoute from "./moudles/common-router"

const routesHasChild: object[]= [...commonRoute, settingRouter]
const routes: object[] = []

handleRouter(routesHasChild)

function handleRouter(route){
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