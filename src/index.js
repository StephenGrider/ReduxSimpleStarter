import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import PostIndex from "./components/PostIndex";
import NewPost from "./components/NewPost";
import ShowPost from "./components/ShowPost";
import reducers from "./reducers";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import ReducerPromise from "redux-promise";

const createStoreWithMiddleware = applyMiddleware(ReducerPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={PostIndex} />
          <Route path="/post/new" component={NewPost} />
          <Route path="/post/:id" component={ShowPost} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
