let axios = require('axios');

export let setCurrentPatient = (id) => {
  return {
    type: 'Set_Current_Patient',
    id
  }
}

export let setPatientProfile = (profile) => {
  return {
    type: 'Set_Patient_Profile',
    profile
  }
}

export let getPatientProfile = (id) => {
  let url = `http://localhost:3000/patients/${id}`
  return (dispatch) => {
    axios.get(url).then(
      (response) => {
        let profile = response.data.data.attributes
        dispatch(setPatientProfile(profile))
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
