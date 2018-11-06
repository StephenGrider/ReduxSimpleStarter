const initialState = [];

export let patientWoundsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Set_Patient_Wounds':
      return action.woundsArray;
    default:
      return state;
  }
}
