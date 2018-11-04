import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { setCurrentPatient, getPatientProfile } from '../../actions/patientAction'

const PatientList = ({ patients, setPatient }) =>
  <div className="">
    <h1>Patients</h1>
    { patients.patientsArray.map((patient, i) =>
        <div key = { patient.lastName }>
            <Card
                address={ patient.attributes.address }
                avatarUrl={ patient.attributes.avatarUrl }
                dob={ patient.attributes.dateOfBirth }
                key={ patient.id }
                firstName={ patient.attributes.firstName }
                lastName={ patient.attributes.lastName }>
                <CardActions>
                    <Button
                        color="primary"
                        size="small"
                        onClick={ setPatient(i + 1)}
                        key = { patient.attributes.firstName }
                        >
                            Patient details
                    </Button>
                </CardActions>
            </Card>
        </div>
        )
    }
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