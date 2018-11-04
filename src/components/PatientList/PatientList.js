import React from 'react';
import { connect } from 'react-redux';

import Card from '../Card/Card';
import Wound from '../Wound/Wound';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { setCurrentPatient, getPatientProfile } from '../../actions/patientAction'

const PatientList = ({ patients, setPatient }) =>
  <div>
    <h1>Patients</h1>
    <div className="grid-wrapper">
    { patients.patientsArray.map((patient, i) =>
        <div key = { patient.lastName }>
            <Card
                avatarUrl={ patient.attributes.avatarUrl }
                dob={ patient.attributes.dateOfBirth }
                key={ patient.id }
                firstName={ patient.attributes.firstName }
                lastName={ patient.attributes.lastName }>
                <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    onClick={ setPatient(i+1) }>
                    <Typography>
                        PATIENT DETAILS
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <p>Address: { patient.attributes.address }</p>
                            <br/>
                            <p>Room number: { patient.attributes.roomNumber }</p>
                            <br />
                            <p>Bed number: { patient.attributes.bedNumber }</p>
                            <br />
                            <p>Last updated: { patient.attributes.updatedAt.slice(0, 10) }</p>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    onClick={ setPatient(i+1) }>
                    <Typography>
                        PATIENT WOUNDS
                    </Typography>
                    </ExpansionPanelSummary>
                    <Wound />
                </ExpansionPanel>
            </Card>
        </div>
        )
    }
    </div>
  </div>;

const mapStateToProps = ({ patients }) => ({
  patients,
});

const mapDispatchToProps = dispatch => ({
    setPatient(id) {
        return () => {
            dispatch(setCurrentPatient(id));
            dispatch(getPatientProfile(id));
        };
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);