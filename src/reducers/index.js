import { combineReducers } from 'redux'
import  weatherReducer from '@/reducers/weather'

const reducer = combineReducers({
  weather: weatherReducer
});

export default reducer;
