import { AntdForm, CugForm } from '@/page/component-base';
import { BaseChart, TopoChart } from '@/page/component-chart';
import { Icon, BrIcon, Mardown, ReactTest, Table, OtherTest, CodeEditor } from '@/page/component-other';
import { AxiosSolution } from '@/page/solution-axios';
import { CssCenter } from '@/page/solution-css';
import { AuthoritySolution } from '@/page/solution-authority';
import FrontMonitor from '@/page/solution-monitor';
import VirtualEditor from '@/page/solution-virtual-editor';
import CircultionScroll from '@/page/solution-circultion-scroll';
import { ReactRedux, ReactBase } from '@/page/use-react';

const layoutRouter = [
  {
    path: '/base-component',
    meta: { title: '基础组件', icon: '' },
    children: [
      {
        path: '/base-component/ant-form',
        isExact: true,
        component: AntdForm,
        meta: { title: 'antd表单组件', icon: '' },
      },
      {
        path: '/base-component/cug-form',
        isExact: true,
        component: CugForm,
        meta: { title: '自定义表单组件', icon: '' },
      },
    ],
  },
  {
    path: '/chart-component',
    meta: { title: '图形化组件', icon: '' },
    children: [
      {
        path: '/chart-component/echart-base',
        isExact: true,
        component: BaseChart,
        meta: { title: 'echart基础图', icon: '' },
      },
      {
        path: '/chart-component/g6-topo',
        isExact: true,
        component: TopoChart,
        meta: { title: 'g6-拓扑图', icon: '' },
      },
    ],
  },
  {
    path: '/other',
    meta: { title: '其他组件', icon: '' },
    children: [
      {
        path: '/other/icon',
        isExact: true,
        component: Icon,
        meta: { title: '图标展示', icon: '' },
      },
      {
        path: '/other/br-icon',
        isExact: true,
        component: BrIcon,
        meta: { title: '博睿图标', icon: '' },
      },
      {
        path: '/other/makdown',
        isExact: true,
        component: Mardown,
        meta: { title: 'Markdown', icon: '' },
      },
      {
        path: '/other/table',
        isExact: true,
        component: Table,
        meta: { title: '可拖拽表头', icon: '' },
      },
      {
        path: '/other/other',
        isExact: true,
        component: OtherTest,
        meta: { title: '其他组件测试', icon: '' },
      },
      {
        path: '/other/code-editor',
        isExact: true,
        component: CodeEditor,
        meta: { title: '代码编辑器', icon: '' },
      },
    ],
  },
  {
    path: '/react-use',
    meta: { title: 'react功能性测试', icon: '' },
    children: [
      {
        path: '/react-use/base',
        isExact: true,
        component: ReactBase,
        meta: { title: 'react功能性测试', icon: '' },
      },
      {
        path: '/react-use/react-redux',
        isExact: true,
        component: ReactRedux,
        meta: { title: 'redux使用', icon: '' },
      },
    ],
  },
  {
    path: '/axios-use',
    meta: { title: 'axios常见问题解决方案', icon: '' },
    children: [
      {
        path: '/axios-use/base',
        isExact: true,
        component: AxiosSolution,
        meta: { title: 'axios常见问题解决方案', icon: '' },
      },
    ],
  },
  {
    path: '/solution-css',
    meta: { title: 'css解决方案', icon: '' },
    children: [
      {
        path: '/solution-css/base',
        isExact: true,
        component: CssCenter,
        meta: { title: '居中方案', icon: '' },
      },
    ],
  },
  {
    path: '/solution-monitor',
    meta: { title: '埋点监控方案', icon: '' },
    component: FrontMonitor,
  },
  {
    path: '/solution-auth',
    meta: { title: '权限校验方案', icon: '' },
    component: AuthoritySolution,
  },
  {
    path: '/solution-virtual-editor',
    meta: { title: '可视化编辑器解决方案', icon: '' },
    component: VirtualEditor,
  },
  {
    path: '/solution-circultion-scroll',
    meta: { title: '无限滚动解决方案', icon: '' },
    component: CircultionScroll,
  },
];
export default layoutRouter;
