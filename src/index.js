import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyC_XvStCGm1z1suSkSnjeTkciTWMJQFjMc';


// Create a new component.  This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
} 

// Take this component's generated HTML and put it in the DOM
// first arg is instance of App function, and second arg is where to place the rendered HTML

ReactDOM.render(<App />, document.querySelector('.container'));
