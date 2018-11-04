import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCgpmgwIjb9S6vWjLy-jV2Ep9eYpFR7byk'

YTSearch({ key: API_KEY, term: 'snowboard' }, (data) => { console.log(data) });

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".container"));