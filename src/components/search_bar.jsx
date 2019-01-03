import React from 'react';

const SearchBar = () => {

  const handleInputChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <input onChange={handleInputChange} />
  );
};

export default SearchBar;
