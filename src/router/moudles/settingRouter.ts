import { RoleManage, UserManage } from "../../page/setting"
const settingRouter = {
  path: '/set',
  meta: {title: '设置中心', icon:''},
  children: [{
    path: '/set/role-manage',
    isExact: true,
    component: RoleManage,
    meta: {title: '用户管理', icon:''},
  },{
    path: '/set/user-manage',
    isExact: true,
    component: UserManage,
    meta: {title: '角色管理', icon:''},
  }]
}
export default settingRouter