import React from 'react';
import { connect } from 'react-redux';

const PatientProfile = ({ profile }) =>
  <div>
    <h1>Profile</h1>
     <div>{ profile.firstName }</div>
  </div>;

const mapStateToProps = ({ patient: { profile } }) => ({
  profile,
});

export default connect(mapStateToProps)(PatientProfile);
