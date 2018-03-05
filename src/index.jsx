/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDMKHcl27WCHl40nZYAIuxP65vRQVJIUp8';

const App = () =>
  (
    <div>
      <SearchBar />
    </div>
  );

ReactDOM.render(<App />, document.querySelector('.container'));
