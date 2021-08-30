import Login from "../../page/login"
const noLayoutRouter = [
  {
    path: '/',
    isExact: true,
    component: Login,
    meta: {title: '登录', icon:''},
  }
]

export default noLayoutRouter