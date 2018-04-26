/**
 * Created by Roger on 2017/9/4.
 */

import "./styles/index.less";

import React from "react";
import ReactDom from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store/store";

import Output from './pages/index.jsx';

ReactDom.render(
  <Provider store={store}>
    <Output />
  </Provider>,
  document.getElementById('root')
);