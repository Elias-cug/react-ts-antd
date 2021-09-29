import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router/index';
import './assets/css/index.less';
import './assets/icon-font/style.css';

import '@/locales/locales';
import { Provider } from 'react-redux';
import store from './redux/store';

require('../mock/user-mock');

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
