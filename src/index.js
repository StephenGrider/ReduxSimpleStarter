import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component.  This component should produce some HTML
const App = () => {
  return <div>Hello World!</div>;
}

// Take this component's generated HTML and put it in the DOM
// first arg is instance of App function, and second arg is where to place the rendered HTML

ReactDOM.render(<App />, document.querySelector('.container'));
