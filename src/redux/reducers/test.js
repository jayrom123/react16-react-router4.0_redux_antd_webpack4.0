/**
 * Created by Administrator on 2017/9/30.
 */

import immutable,{fromJS} from "immutable";
import {VISIBLE} from '../constants/test';

const init = {
  visible: false
};

export const Test = (state = init, action) => {
  switch (action.type) {
    case VISIBLE:
      return  fromJS(state).merge({visible: action.visible}).toJS();
    default:
      return state;
  }
};