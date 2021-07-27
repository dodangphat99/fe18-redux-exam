import { combineReducers } from 'redux';
import productReducer from './product.reducer';
import userReducer from './user.reducer';
import toDoListReducer from './todolist.reducer';

export default combineReducers({
  productReducer: productReducer,
  userReducer: userReducer,
  toDoListReducer:toDoListReducer,
})
