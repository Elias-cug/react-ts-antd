import layoutRouter from "./layout-router"
import noLayoutRouter from "./no-layout-router"
import { RouteType } from '../model/router-type'
const routesHasChild = [layoutRouter]
const layoutRouterDepth0: RouteType[]= []

handleRouter(routesHasChild)
console.log(layoutRouterDepth0);

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
    layoutRouterDepth0.push(route)
  }
}

export default {
  layoutRouter: layoutRouterDepth0,
  noLayoutRouter: noLayoutRouter
}