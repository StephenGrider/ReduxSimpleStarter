import { combineReducers } from 'redux';
import WeatherReducer from './Weather_Reducer';

const rootReducer = combineReducers({
  
  weather: WeatherReducer
});

export default rootReducer;
