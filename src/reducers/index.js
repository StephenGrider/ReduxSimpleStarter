import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
    booksReducer: BooksReducer,
    activeBookReducer: ActiveBook
});

export default rootReducer;
