import patientAction from '../../actions/patientAction';

export let patientProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case 'Set_Patient_Profile':
      return action.profile;
    default:
      return state;
  }
}
