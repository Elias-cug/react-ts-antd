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
const routesHasChild: object[]= [...commonRoute,settingRouter]
const routes: object[] = []

routesHasChild.forEach(item => {
  handleRouter(item)
})

function handleRouter(route){
  if(route.children) {
    handleRouter(route.children)
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