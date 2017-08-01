import React from 'react';

/* The Title Bar for the top of the App
*     1. only returns JSX (for now)
*/
const TitleBar = (props) => {
  return (
    <div className="jumbotron center">
      <div className="title">
        Who Said What?
      </div>
      <p>A game where you guess who said that particular quote for books, movies, & tv shows</p>
    </div>
  );
}

export default TitleBar;
