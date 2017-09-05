import React, { Component } from 'react';

// React stateless functional component
// const SearchBar = () => {
//   return <input />;
// };

// export default SearchBar;

// React class component
class SearchBar extends Component {
  render() {
    return (
      <div>
        <p>enter search:</p>
        <input />
      </div>
      );
  }


};

export default SearchBar;