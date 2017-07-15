import React, { Component } from 'react';

// define a new class called SearchBar and give it access to
// all the functionality that a React.Component class has
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Starting Value' };
  }

  // this is how the class renders JSX, every class must have
  // a render function
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    )
  }
}

export default SearchBar;
