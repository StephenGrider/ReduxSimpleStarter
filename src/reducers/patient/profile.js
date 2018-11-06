const initialState = {};

export let patientProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Set_Patient_Profile':
      return action.profile;
    default:
      return state;
  }
}
