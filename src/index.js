import React from 'react'; //used to create/manage components
import ReactDOM from 'react-dom'; //used to interact with actual dom

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyC8mevAQqji8_1A7-NkN9I6B7DxYpL2twY";

// Create a new compnent. This componet should produce some HTML

//considered a class "App"
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML. and put it on the page (in the DOM)

// <App /> wrapping it in < /> tags makes it an instance
ReactDOM.render(<App />, document.querySelector('.container')); //2nd argument is location of where to render 1st argument on the DOM