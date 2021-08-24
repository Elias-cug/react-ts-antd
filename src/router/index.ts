import settingRouter from "./moudles/settingRouter"
import Login from "../page/login"
// const fs = require('fs')
const commonRoute: object[] = [
  {
    path: '/',
    isExact: true,
    component: Login,
    meta: {title: '登录', icon:''},
  }
]
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
// const controllers = fs.readdirSync('./moudles')
// console.log(controllers);
// controllers.forEach(f => {
//   f = f.replace('.js', '')
//   const route = require(`./moudles/${f}`)
//   handleRouter(route)
// })

console.log(routes);

export default routes