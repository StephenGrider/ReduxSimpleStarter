import React from 'react';
import ReactDOM from 'react-dom';
import { KEY } from '../src/Dev_secret.js'

// const KEY = '1234'
//Create a new component.  This component should produce some HTML.

const App = () => {
  return(
    <div>Hi! {KEY} </div>
  )
}

// Take the component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
