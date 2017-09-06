import React, { Component } from 'react';

// React stateless functional component
// const SearchBar = () => {
//   return <input />;
// };

// export default SearchBar;

// React class component
class SearchBar extends Component {
  render() {
    return <input onChange={ event => console.log(event.target.value)} />;
  }

  // refactor input to ES6 syntax
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

};

export default SearchBar;