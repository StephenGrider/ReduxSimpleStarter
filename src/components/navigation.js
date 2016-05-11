import React from 'react';
import { Component } from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <div className='container'>
        <nav role="navigation">
          <div id='logo' className='pull-left' style={{float: "left"}}>
            <h3>Brand<br/>New<br/>Congress</h3>
          </div>
          <ul className="nav navbar-nav">
            <li role="presentation"><a href="#">The Tour</a></li>
            <li role="presentation"><a href="#">The Plan</a></li>
            <li role="presentation"><a href="#">Who's Involved</a></li>
            <li role="presentation"><a href="#">Join Us</a></li>
            <li role="presentation"><a href="#">Contribute</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}
