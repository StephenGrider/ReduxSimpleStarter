import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';

import App from './components/app';
import reducers from './reducers';

import style from '../style/style.css'

const createStoreWithMiddleware = applyMiddleware()(createStore);

const render = Component => {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <AppContainer>
        <App />
      </AppContainer>
    </Provider>
    , document.querySelector('.container')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./components/app', () => {
    render(App)
  })
}
