import { AntdForm, CugForm } from '@/page/component-base';
import { LineChart } from '@/page/component-chart';
import { CssCenter } from '@/page/solution-css';
import { AxiosUse } from '@/page/use-axios';
import { Icon, BrIcon, Mardown, ReactTest, Table, OtherTest, CodeEditor } from '@/page/other';
const layoutRouter = [
  {
    path: '/base-component',
    meta: { title: '基础组件', icon: '' },
    children: [
      {
        path: '/base-component/ant-form',
        isExact: true,
        component: AntdForm,
        meta: { title: 'antd表单组件', icon: '' }
      },
      {
        path: '/base-component/cug-form',
        isExact: true,
        component: CugForm,
        meta: { title: '自定义表单组件', icon: '' }
      }
    ]
  },
  {
    path: 'chart-component',
    meta: { title: '图形化组件', icon: '' },
    children: [
      {
        path: '/chart-component/echart',
        isExact: true,
        component: LineChart,
        meta: { title: 'echart组件', icon: '' }
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
        path: '/other/table',
        isExact: true,
        component: Table,
        meta: { title: '可拖拽表头', icon: '' }
      },
      {
        path: '/other/other',
        isExact: true,
        component: OtherTest,
        meta: { title: '其他组件测试', icon: '' }
      },
      {
        path: '/other/code-editor',
        isExact: true,
        component: CodeEditor,
        meta: { title: '代码编辑器', icon: '' }
      }
    ]
  },
  {
    path: 'react-use',
    meta: { title: 'react功能性测试', icon: '' },
    children: [
      {
        path: '/react-use/base',
        isExact: true,
        component: ReactTest,
        meta: { title: 'react功能性测试', icon: '' }
      }
    ]
  },
  {
    path: 'axios-use',
    meta: { title: 'axios功能性测试', icon: '' },
    children: [
      {
        path: '/axios-use/base',
        isExact: true,
        component: AxiosUse,
        meta: { title: 'axios功能性测试', icon: '' }
      }
    ]
  },
  {
    path: 'solution-css',
    meta: { title: 'css解决方案', icon: '' },
    children: [
      {
        path: '/solution-css/base',
        isExact: true,
        component: CssCenter,
        meta: { title: '居中方案', icon: '' }
      }
    ]
  }
];
export default layoutRouter;
