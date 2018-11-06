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

export let setPatientWounds = (woundsArray) => {
  return {
    type: 'Set_Patient_Wounds',
    woundsArray
  }
}

// This funcion will return another functiion that get passed the dispatch function to do async work.
// Gets patient data using axios
// Gets URL for patient's associated wounds and passes it to getPatientWounds function
export let getPatientProfile = (id) => {
  let url = `http://localhost:3000/patients/${id}`
  return (dispatch) => {
    axios.get(url).then(
      (response) => {
        let data = response.data.data
        let profile = data.attributes
        let patient_wounds = data.relationships.wounds.links.related

        dispatch(setPatientProfile(profile))
        dispatch(getPatientWounds(patient_wounds))
      },
      (err) => {
        console.log("getPatientProfile error:", err);
      }
    )
  }
}

// This function gets the url argument passed in from getPatientProfile
export let getPatientWounds = (url) => {
  return (dispatch) => {
    axios.get(url).then(
      (response) => {
        let woundsArray = response.data.data

        dispatch(setPatientWounds(woundsArray))
      },
      (err) => {
        console.log("getPatientWounds error:", err);
      }
    )
  }
}

