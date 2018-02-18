import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCAmH-Gis53Ln4gYPLSzhlR20-fR1fXiJg';

// create a new component. this should produce some html.

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// take this component's generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
