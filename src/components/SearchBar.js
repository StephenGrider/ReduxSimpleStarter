import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      query: '' 
    }
  }

  render() {
    return (
      <div>
        <input onChange={ e => this.setState({ query: e.target.value }) } />
      </div>
    );
  }
}

export default SearchBar;