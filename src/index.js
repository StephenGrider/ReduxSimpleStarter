import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './components/app';

ReactDOM.render(
  <Provider store={createStore(() => {})}>
    <App />
  </Provider>
  , document.getElementById('container'));
