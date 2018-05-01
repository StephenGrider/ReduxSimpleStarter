import { combineReducers } from 'redux';
import userReducer from './userred';

const rootReducer = combineReducers({
  users: userReducer
});

export default rootReducer;
