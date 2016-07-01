import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyAaYVQqZdtfjDgAMsv_YWpFzb6zqZu1Y7w";

//make a Component

const App = () => {
  return(
    <div>
      <SearchBar />
    </div>
  );
};

//put compeont on screen
ReactDOM.render(<App />, document.querySelector('.container'));
