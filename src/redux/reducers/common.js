/**
 * Created by Administrator on 2017/9/30.
 */

import {fromJS} from "immutable";
import {LOADING} from "../constants/common";

const init = {
  loading: false,
};

export const Common = (state = init, action) => {
  switch (action.type) {
    case LOADING:
      return fromJS(state).merge({loading: action.loading}).toJS();
    default:
      return state;
  }
};