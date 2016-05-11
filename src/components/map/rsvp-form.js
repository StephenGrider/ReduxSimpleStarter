import React from 'react';
import { Component } from 'react';
import moment from 'moment';

export default class RSVPForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let date = moment(this.props.eventDate).format("MMM d [@ 7PM]"); // h:mm a

    return (
      <div className="container">
        <h3>{this.props.eventTitle}</h3>
        <h5>{date}</h5>
        <form>
          <div className='form-group'>
            <input type="text" className="form-control" placeholder="First Name" />
          </div>
          <div className='form-group'>
            <input type="text" className="form-control" placeholder="Last Name" />
          </div>
          <div className='form-group'>
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className='form-group'>
            <input type="text" className="form-control" placeholder="Phone Number" />
          </div>
          <button type="submit" className="btn btn-default">RSVP</button>
        </form>
      </div>
    )
  }
}
