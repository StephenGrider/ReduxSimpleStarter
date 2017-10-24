import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
    booksReducer: BooksReducer
});

export default rootReducer;
