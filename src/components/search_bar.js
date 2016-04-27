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
      <div className='search-bar'>
        <input 
          value = {this.state.term} //makes it controlled component
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
      );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

//class based components used whenever a coponenet needs to be aware of state eg. data mannipulation, dom re-rendering