/**
 * Created by Administrator on 2017/9/30.
 */


import { VISIBLE } from '../../constants/test';

const initAction = (visible) => {
    return {
        type: VISIBLE,
        visible
    }

}

export const turnModal = (params) => {
    return (dispatch) => {
        dispatch(initAction(params))
    }
}