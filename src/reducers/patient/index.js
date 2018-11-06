import { combineReducers } from 'redux';
import { patientIdReducer } from './id';
import { patientProfileReducer } from './profile';
import { patientWoundsReducer } from './wounds';

export default combineReducers({
    id: patientIdReducer,
    profile: patientProfileReducer,
    wounds: patientWoundsReducer
});
