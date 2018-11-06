import React, { Component } from 'react';
import { connect } from 'react-redux';
import PatientList from './PatientList/PatientList'
import PatientProfile from './PatientProfile/PatientProfile'
let actions = require('../actions/index');

export class App extends Component {
  componentDidMount() {
    this.props.fetchPatient();
  }

  render() {
    let { patients } = this.props

    if (patients.isFetching == true) {
      return <p>Loading</p>
    } else if (patients.isFetching == false && patients.patientsArray.length >=1) {
      return (
        <div>
          <PatientList/>
          <PatientProfile />
        </div>
      )
    } else {
      return (
        <p>Sorry, something's gone wrong!</p>
      )
    }
  }
}

export default connect((state)=>{ return state }, actions)(App);