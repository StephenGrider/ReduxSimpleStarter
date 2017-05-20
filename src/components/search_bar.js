import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
  render() {
    return <input onChange={event => console.log(event.target.value)}/>;
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
