import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// YouTube API
const API_KEY = "AIzaSyDGoXnpcCZB0cuAiQwvwTyfHAle29XaNqw";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
    )
};

ReactDOM.render(<App />, document.querySelector('.container'));