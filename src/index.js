import React from 'react';
import ReactDOM from 'react-dom'

// Create a new component.  This component should produce some HTML

const App = () => {
  return <div>Hello World!</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)
// first arg: make an instance of components, wrap it is jsx tags
// second arg: target container, or target DOM node
ReactDOM.render(<App />, document.querySelector('.container'));

