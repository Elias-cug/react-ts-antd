import DataAccess from '@/page/data-access';
import DataStandardization from '@/page/data-standardization';
import { FormTest } from '@/page/antd-test';
const layoutRouter = [
  {
    path: '/integration',
    meta: { title: '集成', icon: '' },
    children: [
      {
        path: '/integration/data-access',
        isExact: true,
        component: DataAccess,
        meta: { title: '数据接入', icon: '' }
      },
      {
        path: '/integration/data-standardization',
        isExact: true,
        component: DataStandardization,
        meta: { title: '数据标准化', icon: '' }
      }
    ]
  },
  {
    path: '/test',
    meta: { title: 'antd组件测试', icon: '' },
    children: [
      {
        path: '/test/ant-form',
        isExact: true,
        component: FormTest,
        meta: { title: '表单组件', icon: '' }
      }
    ]
  }
];
export default layoutRouter;
