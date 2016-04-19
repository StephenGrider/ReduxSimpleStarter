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
        <input 
          value = {this.state.term} //makes it controlled component
          onChange={event => this.setState({ term: event.target.value })} 
        />
      </div>
      );
  }
}

export default SearchBar;

//class based components used whenever a coponenet needs to be aware of state eg. data mannipulation, dom re-rendering