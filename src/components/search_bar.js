import React, { Component } from 'react';

// functional components
// const SearchBar = () => { render <div>Hello There!</div> };

// 1. only class based components have state
// 2. each instace of class based components has its own copy of state
// 3. controlled field is a form element, like an input whose value is set by the state of the object and not the opposite
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
           />
      </div>
    );
  }
}

export default SearchBar;
