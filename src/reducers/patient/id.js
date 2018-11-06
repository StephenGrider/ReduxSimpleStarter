const initialState = 0;

export let patientIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Set_Current_Patient':
      return action.id;
    default:
      return state;
  }
};