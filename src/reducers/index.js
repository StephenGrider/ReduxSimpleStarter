import { combineReducers } from 'redux';
import QuestionReducer from './reducer_questions';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  questions: QuestionReducer,
  form: formReducer
});

export default rootReducer;
