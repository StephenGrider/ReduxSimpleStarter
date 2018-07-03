import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = config.SECRET_KEY;

// Create new component and it should produce some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take component and put it onto page(DOM)

ReactDOM.render(<App/>, document.querySelector(".container"));
