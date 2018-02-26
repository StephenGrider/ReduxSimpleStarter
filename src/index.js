import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';

import App from './components/app';
import reducers from './reducers';

import style from '../style/style.css'

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>
    , document.querySelector('.container')
  );
}

/* Intital rendering of the component */
render(App);


/* Could use an extra ENV check for development */
if (module.hot) {
  /*
    Full page reload on reducer change
    changelog: https://github.com/reactjs/react-redux/releases/tag/v2.0.0
    explanation: https://github.com/gaearon/react-hot-loader/issues/413
  */
  module.hot.accept('./reducers', () => {
    store.replaceReducer(reducers)
  });
  /* HMR reload on component change. */
  module.hot.accept('./components/app', () => {
    render(App);
  });
}
