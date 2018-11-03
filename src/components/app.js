import React, { Component } from 'react';
import { connect } from 'react-redux';
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
          <div className="dev-list">
            { patients.patientsArray.map((patient) =>
              <li key={ patient.id }>
                { patient.attributes.firstName } { patient.attributes.lastName }
              </li>)
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