/**
 * Created by Administrator on 2017/9/30.
 */

import {createStore, combineReducers, applyMiddleware} from "redux";
import * as reducers from "../reducers/index";
import thunk from 'redux-thunk'; // 中间件，有了这个就可以支持异步action

let store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk)
  );

export default store;