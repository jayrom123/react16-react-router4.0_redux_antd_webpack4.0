/**
 * Created by Roger on 2017/9/4.
 */

import "./styles/index.less";

import React from "react";
import ReactDom from "react-dom";
import Routers from './config/routers.jsx';
import {Provider} from "react-redux";
import store from "./redux/store/store";

ReactDom.render(
  <Provider store={store}>
    {Routers}
  </Provider>,
  document.getElementById('root')
);