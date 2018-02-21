import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  weather: (state = {}) => state,
});

export default rootReducer;
