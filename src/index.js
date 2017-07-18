import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'

import App from './components/app';
import reducers from './reducers';
/**
 * ReduxPromise: Framework que intermedia actions que precisam realizar algum
 * trabalho que usa promisse: Ex {@link fetchWeather}
 *
 * @type {StoreEnhancerStoreCreator<S>}
 */
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <App />
  </Provider>
  , document.querySelector('.container'));
