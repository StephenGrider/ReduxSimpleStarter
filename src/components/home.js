import React, { Component } from 'react';
import TitleBar from './title_bar';
import { Link } from 'react-router-dom';

/**
* The Home page for the app
*   1. contains the main title bar
*   2. contains the links to each of the quizzes
*/
export default class Home extends Component {
  render() {
    const linkClassName = "btn btn-info btn-space";
    const rowClassName = "row bottom-padding";

    return (
      <div>
        <TitleBar />
          <div className="container">
            <div className={rowClassName}>
              <h4>
                Movies
              </h4>
              <Link className={linkClassName} to="/quizhp"> Harry Potter (1-7) Quiz </Link>
              <Link className={linkClassName}  to="/quizabouttime"> About Time </Link>
            </div>
            <div className={rowClassName}>
              <h4> Books </h4>
              <Link className={linkClassName}  to="/quizperks"> The Perks of Being a Wallflower </Link>
              <Link className={linkClassName}  to="/quizthecircle"> The Circle </Link>
            </div>
            <div className={rowClassName}>
              <h4> TV Shows </h4>
              <Link className={linkClassName}  to="/quizlost"> Lost </Link>
              <Link className={linkClassName}  to="/quizfriends"> Friends </Link>
              <Link className={linkClassName}  to="/quizarresteddevelopment"> Arrested Development </Link>
            </div>
          </div>
      </div>
    );
  }
}
