import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
*   Contains the score & logout. Not sure yet if component or container
*/
export default class HeaderBar extends Component {
  render(){
    return (
      <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li> Username: [username] </li>
            <li> Score: [score] </li>
            <li className="right-buffer">  <Link to="/"> Logout </Link> </li>
          </ul>
      </div>
    );
  }
}
