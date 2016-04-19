import React, { Component } from 'react';
                //gives searchbar all functionality from React.Component class
class SearchBar extends Component {
  //syntax for defining methods on a class
  render() {
    return <input onChange={ event => console.log(event.target.value) }/>;
  }

}

export default SearchBar;

//functional components vs class based components