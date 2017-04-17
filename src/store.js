import { createStore, applyMiddleware } from 'redux';
import ReduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const middleware = [ReduxThunk,ReduxLogger]
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(state => state,{});

export default store;