import patientAction from '../../actions/patientAction';

export let patientProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case 'Set_Patient_Profile':
      return patientAction.action.profile;
    default:
      return state;
  }
}
