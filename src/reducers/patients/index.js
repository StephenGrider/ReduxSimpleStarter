// patientsReducer listens for two actions
export let patientsReducer = (state = { isFetching: false, patientsArray: [] }, action) => {
    switch(action.type) {
        case 'Start_Patient_Search':
            return {
                isFetching: true
            }
        break;

        case 'End_Patient_Search':
            return {
                isFetching: false,
                patientsArray: action.patientsArray,
            }
        break;
        default: return state;
    }
}