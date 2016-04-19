import React, { Component } from 'react';
                //gives searchbar all functionality from React.Component class
class SearchBar extends Component {
  constructor(props) { 
    super(props);

    this.state = { term: ''};
  }

  //syntax for defining methods on a class
  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
      </div>
      );
  }
}

export default SearchBar;

//functional components vs class based components