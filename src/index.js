import React from 'react';
import ReactDOM from 'react-dom';
import YouTube from './config.js';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar.js'

YTSearch({ key: YouTube.API_KEY, term: 'sixers' }, data => {
  console.log(data);
})

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));