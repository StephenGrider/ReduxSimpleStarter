import { combineReducers } from 'redux';
import commentsReducer from './comments'

const rootReducer = combineReducers({
  comments: commentsReducer
});

export default rootReducer;
