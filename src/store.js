import { createStore, applyMiddleware } from 'redux';
import reducer from '@/reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStoreWithMiddleware(reducer);

export default store;