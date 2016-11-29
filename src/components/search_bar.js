// need to import react into all components that have jsx

import React, { Component } from 'react';

// // functional component
// const SearchBar = () => {
//   return <input />
// };

// class component
// this is how we define methods on a class
// when we create a class component we must always create a render method and have some jsx, or else there will be an error 
// declare event handler and pass it to the input element
class SearchBar extends Component {
  render() {
    return <input onChange={this.onInputChange} />;
  }

  onInputChange(event) {
    console.log("event.target.value", event.target.value);
  }


}

export default SearchBar; 
