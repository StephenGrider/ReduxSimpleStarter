import React from 'react';
import { connect } from 'react-redux';

const PatientProfile = ({ profile, wounds }) =>
  <div>
    <h1>Profile</h1>
     <div>LALALA{ profile.firstName }</div>
     <div>LALA { wounds.type }</div>
  </div>;

// Grabs profile from patient state and passes it as prop to the PatientProfile component
const mapStateToProps = ({ patient: { profile, wounds } }) => ({
  profile,
  wounds,
});


export default connect(mapStateToProps)(PatientProfile);
