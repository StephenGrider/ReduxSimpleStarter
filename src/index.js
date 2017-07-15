import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyCB9LjpB7-06mtXHbas8KDkQHoBA81733I';

// Create a new component. This component should produce
// some HTML

const App = () => {
  return <div> Hi! </div>;
}

// Take this component's generated HTML and put it on
// the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
