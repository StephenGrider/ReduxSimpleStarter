import React from 'react';
import ReactDOM from 'react-dom';
// import { YOUTUBE_API_KEY } from './config.js';

import SearchBar from './components/SearchBar.js'

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));