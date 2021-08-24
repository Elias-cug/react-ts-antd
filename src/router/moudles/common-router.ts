import Login from "../../page/login"
const commonRoute: object[] = [
  {
    path: '/',
    isExact: true,
    component: Login,
    meta: {title: '登录', icon:''},
  }
]

export default commonRoute