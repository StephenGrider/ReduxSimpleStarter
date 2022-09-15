import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyBoOe0FoZUn_37zYIH0wr6Oh66O0mzNy5c";

// Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's HTML and put in on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
