import React from 'react';
import ReactDOM from 'react-dom';

// Step 1: create a new componenet to produce HTML
const App = () => {     // use ES6 function syntax
  return <div>Hi!</div> // JSX
}
// Step 2: render the above HTML and render to DOM
ReactDOM.render(<App />, document.querySelector('.container'));