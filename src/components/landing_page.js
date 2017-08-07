import React, { Component } from 'react';
import TitleBar from './title_bar';
import { Link } from 'react-router-dom';
import HeaderBar from '../containers/header_bar';

/**
* The Home page for the app
*   1. contains the main title bar
*   2. contains the links to each of the quizzes
*/
export default class LandingPage extends Component {
  render() {
    const linkClassName = "btn btn-info btn-space padding-left";
    const rowClassName = "row bottom-padding";

    return (
      <div>
        <nav className="navbar navbar-default">
          <HeaderBar />
        </nav>
        <div>
          <TitleBar />
        </div>
        <div>
          <div className={rowClassName}>
            <div className="legend-title">Movies </div>
            <div className="top-padding" />
            <Link className={linkClassName} to="/quizharrypotter"> Harry Potter (1-7) Quiz </Link>
            <Link className={linkClassName}  to="/quizwizardofoz"> Wizard of Oz </Link>
          </div>
          <div className={rowClassName}>
            <div className="legend-title">Books </div>
            <div className="top-padding" />
            <Link className={linkClassName}  to="/quizperks"> The Perks of Being a Wallflower </Link>
            <Link className={linkClassName}  to="/quizthecircle"> The Circle </Link>
          </div>
            <div className={rowClassName}>
              <div className="legend-title">TV Shows </div>
              <div className="top-padding" />
              <Link className={linkClassName}  to="/quizlost"> Lost </Link>
              <Link className={linkClassName}  to="/quizfriends"> Friends </Link>
              <Link className={linkClassName}  to="/quizarresteddevelopment"> Arrested Development </Link>
              <Link className={linkClassName} to="/quiztheoffice"> The Office </Link>
            </div>
          </div>
      </div>
    );
  }
}
