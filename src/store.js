import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducer from '@/reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const store = createStoreWithMiddleware(reducer);

export default store;