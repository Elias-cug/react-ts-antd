import { createStore, combineReducers} from 'redux'
import setting from './reducer/setting'

const reducer = combineReducers({
  setting
})

const store = createStore(reducer)

export default store