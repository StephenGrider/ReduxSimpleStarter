import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: 'Insert some text' };
  }

  render() {
    return (
      <input
        value={this.state.term}
        onChange={event => this.setState({ term: event.target.value })}
      />
    // {/*changes the State object to the value of the event target*/}
    );}
}

export default SearchBar;
