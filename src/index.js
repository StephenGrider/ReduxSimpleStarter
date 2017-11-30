import React from 'react';
import ReactDOM from 'react-dom';
import { API_KEY } from '../src/Dev_secret.js'

//Create a new component.  This component should produce some HTML.

const App = () => {
  return(
    <div>Hi! { API_KEY } </div>
  )
}

// Take the component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
