import { combineReducers } from 'redux';
import { patientsReducer } from './patients';
import patient from './patient';

const rootReducer = combineReducers({
  patients: patientsReducer,
  patient,
});

export default rootReducer;
