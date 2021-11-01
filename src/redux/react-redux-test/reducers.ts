import { combineReducers } from 'redux';
import logReducer from '@/page/use-react/use-redux/reducers/logReducer';
import userReducer from '@/page/use-react/use-redux/reducers/userReducer';

const reducer = combineReducers({
  logReducer,
  userReducer
});

export default reducer;
