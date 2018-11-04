import { combineReducers } from 'redux';
import { patientIdReducer } from './id';
import { patientProfileReducer } from './profile';

export default combineReducers({
    id: patientIdReducer,
    profile: patientProfileReducer
});
