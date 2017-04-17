import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ModuleProvider } from 'redux-modules';
import App from './components/app';
import store from './store'


ReactDOM.render(
  <ModuleProvider store={store}>
    <App />
  </ModuleProvider>
  , document.querySelector('.container'));