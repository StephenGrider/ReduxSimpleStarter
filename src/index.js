import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = config.SECRET_KEY;

console.log(API_KEY);

// Create new component and it should produce some html
const App = () => {
  return <div>Hi!</div>;
}

// Take component and put it onto page(DOM)

ReactDOM.render(<App/>, document.querySelector(".container"));
