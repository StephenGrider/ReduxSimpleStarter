import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyA2kDKEdWA-jIcAbxi9S8Ugt6-yryKWWy4';

// Create a new component. This component should produce
// some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and
// put is on the page(in DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
