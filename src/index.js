import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// YouTube API
const API_KEY = "AIzaSyDGoXnpcCZB0cuAiQwvwTyfHAle29XaNqw";

// Step 1: create a new component to produce HTML
const App = () => {     // use ES6 function syntax
  return (
    <div>
      <SearchBar />
    </div> // JSX
    )
};
// Step 2: render the above HTML and render to DOM
ReactDOM.render(<App />, document.querySelector('.container'));