import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
*   Contains the score & logout.
*     -contains info about current user
*/
class HeaderBar extends Component {
  render(){
    return (
      <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li> Username: </li>
            <li> Score: </li>
            <li className="right-buffer">  <Link to="/"> Logout </Link> </li>
          </ul>
      </div>
    );
  }
}


export default HeaderBar
