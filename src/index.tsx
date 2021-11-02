import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Routes from './router/index';
import './assets/css/index.less';
import './assets/icon-font/style.css';

import '@/locales/locales';
import { Provider } from 'react-redux';

// import store from './redux/common/store';
import { store } from './redux/react-redux-test/store';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
