import React from 'react';
import ReactDom from 'react-dom';
// Creating a new component to produce HTML
// This is like a factory producing instances of App - a class
const App = () => {
  return <div>Hi!</div>;
}

// Generate the component's HTML
ReactDom.render(<App />, document.querySelector('.container'));
