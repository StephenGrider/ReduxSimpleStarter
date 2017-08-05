import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './components/landing_page';
import Results from './components/results';
import QuestionArea from './container/question_list';
import reducers from './reducers';
import HomePage from './container/home_page';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/quiz:id" component={QuestionArea} />
          <Route path="/results" component={Results} />
          <Route path="/home" component={LandingPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
