import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should
// produce some HTML

const App = function() {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on the page (in DOM)
//

ReactDOM.render(<App />, document.querySelector('.container'));
