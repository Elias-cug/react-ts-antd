import React from 'react';
import ReactDOM from 'react-dom';

import Routes from "./router/index";

import { Provider } from 'react-redux';
import reducer from './redux/reducers/index';
import { createStore} from 'redux'
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
