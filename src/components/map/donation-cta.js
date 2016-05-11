import React from 'react';
import { Component } from 'react';

export default class RSVPForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let date = moment(this.props.eventDate).format("MMM d [@] h:mm a");

    return (
      <div className="container">
        <h3>Thank you for RSVPing!</h3>
        <p>If you can please donate</p>
        <form>
          <div className='form-group'>
            <input type="text" className="form-control" placeholder="Amount" />
          </div>
          <div className='form-group'>
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className='form-group'>
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <button type="submit" className="btn btn-default">RSVP</button>
        </form>
      </div>
    )
  }
}
