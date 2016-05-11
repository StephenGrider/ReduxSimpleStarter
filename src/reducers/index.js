import { combineReducers } from 'redux';
import EventsReducer from './reducer_events';
import StatesReducer from './reducer_states';
import SelectedStateReducer from './reducer_selected_state';

const rootReducer = combineReducers({
  events: EventsReducer,
  states: StatesReducer,
  selectedState: SelectedStateReducer,
  noEventsOnState: false
});

export default rootReducer;
