import React from 'react';
import ReactDOM from 'react-dom';

// Create new component and it should produce some html
const App = () => {
  return <div>Hi!</div>;
}

// Take component and put it onto page(DOM)

ReactDOM.render(<App/>, document.querySelector(".container"));
