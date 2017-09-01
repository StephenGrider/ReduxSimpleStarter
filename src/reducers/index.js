import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: BooksReducer
}); // This is the mapping of our state

export default rootReducer;
