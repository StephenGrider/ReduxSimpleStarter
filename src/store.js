import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default createStoreWithMiddleware(reducers);
