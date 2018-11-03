import { combineReducers } from 'redux';
import { patientsReducer } from './reducer';

const rootReducer = combineReducers({
  patients: patientsReducer
});

export default rootReducer;
