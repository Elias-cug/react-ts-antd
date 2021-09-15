import * as constant from '../../configs/action.config';
import { createReducer } from '../lib/common';

const initialState = {
  showAlert: false
};

export default createReducer(initialState, {
  [constant.TOGGLE_ALERT]: state => {
    return {
      ...state,
      showAlert: !state.showAlert
    };
  }
});
