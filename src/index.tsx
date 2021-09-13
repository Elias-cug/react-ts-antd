import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router/index';
import intl from 'react-intl-universal';
import './assets/css/index.less';
import './assets/icon-font/style.css';

import { Provider } from 'react-redux';
import reducer from './redux/reducers/index';
import { createStore } from 'redux';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
