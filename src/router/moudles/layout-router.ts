import DataAccess from '@/page/data-access';
import DataStandardization from '@/page/data-standardization';
import { AntdForm } from '@/page/antd-component';
import { CugForm } from '@/page/cug-component';
import { Icon, BrIcon, Mardown, ReactTest } from '@/page/other';
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
    path: '/test-antd-component',
    meta: { title: 'antd组件测试', icon: '' },
    children: [
      {
        path: '/test-antd-component/ant-form',
        isExact: true,
        component: AntdForm,
        meta: { title: '表单组件', icon: '' }
      }
    ]
  },
  {
    path: '/test-cug-component',
    meta: { title: '自定义组件测试', icon: '' },
    children: [
      {
        path: '/test-cug/cug-form',
        isExact: true,
        component: CugForm,
        meta: { title: '表单组件', icon: '' }
      }
    ]
  },
  {
    path: '/other',
    meta: { title: '其他组件', icon: '' },
    children: [
      {
        path: '/other/icon',
        isExact: true,
        component: Icon,
        meta: { title: '图标展示', icon: '' }
      },
      {
        path: '/other/br-icon',
        isExact: true,
        component: BrIcon,
        meta: { title: '博睿图标', icon: '' }
      },
      {
        path: '/other/makdown',
        isExact: true,
        component: Mardown,
        meta: { title: 'Markdown', icon: '' }
      },
      {
        path: '/other/react-test',
        isExact: true,
        component: ReactTest,
        meta: { title: 'React功能测试', icon: '' }
      }
    ]
  }
];
export default layoutRouter;
