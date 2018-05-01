import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/app";
import reducers from "./reducers";
import ShowDetails from "./components/ShowDetails";
import reduxPromise from "redux-promise";
import { Router, BrowserRouter, Route, Link, Switch } from "react-router-dom";

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route  path="/details/:id" component={ShowDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
