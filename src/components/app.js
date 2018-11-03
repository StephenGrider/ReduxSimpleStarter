import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card/Card';
let actions = require('../actions/index');

export class App extends Component {
  componentWillMount() {
    this.props.fetchPatient();
  }

  render() {
    let { patients } = this.props

    if (patients.isFetching == true) {
      return <p>Loading</p>
    } else if (patients.isFetching == false && patients.patientsArray.length >=1) {
      return (
        <div>
          <div className="">
            { patients.patientsArray.map((patient) =>
              <Card
                address={ patient.attributes.address }
                avatarUrl={ patient.attributes.avatarUrl }
                dob={ patient.attributes.dateOfBirth }
                key={ patient.attributes.firstName }
                firstName={ patient.attributes.firstName }
                lastName={ patient.attributes.lastName }
              />)
            }
          </div>
        </div>
      )
    } else {
      return (
        <p>PLEASE WORK</p>
      )
    }
  }
}

export default connect((state)=>{ return state }, actions)(App);