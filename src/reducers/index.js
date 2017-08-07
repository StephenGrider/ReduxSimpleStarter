import { combineReducers } from 'redux';
import QuestionReducer from './reducer_questions';
import { reducer as formReducer } from 'redux-form';
import UsersReducer from './reducer_users';

const rootReducer = combineReducers({
  questions: QuestionReducer,
  users: UsersReducer,
  form: formReducer
});

export default rootReducer;
