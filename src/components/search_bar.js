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
// this is how we initialize state in a class based component
  constructor(props) {
    super(props);

// create a new obj and assign it to this.state
// as user types in input, update this.state to be value of what is in the input field 
    this.state = { term: ''}
  }

// use this.setState to inform react that state is changing
  render() {
    return (
      <div className="search-bar">
        <input 
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value) } />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar; 
