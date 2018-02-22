import { combineReducers } from 'redux';
import todoReducer from '../layout/Dashboard/Scenes/Todo/components/TodoReducer';

const rootReducer = combineReducers({
  todo: todoReducer
}) 

export default rootReducer;