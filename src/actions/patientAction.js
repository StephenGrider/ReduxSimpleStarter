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

export let getPatientProfile = (id) => {
  let url = `http://localhost:3000/patients/${id}`
  return (dispatch) => {
    axios.get(url).then(
      (response) => {
        let profile = response.data.data.attributes
        let patient_wounds = response.data.data.relationships.wounds.links.related
        console.log("PROFILE", profile, null, 2)
        console.log("PATIENT WOUNDS", patient_wounds, null, 2)
        dispatch(setPatientProfile(profile))
        dispatch(getPatientWounds(patient_wounds))
      },
      (err) => {
        console.log("getPatientProfile error:", err);
      }
    )
  }
}

export let getPatientWounds = (url) => {
  return (dispatch) => {
    axios.get(url).then(
      (response) => {
        let woundsArray = response.data.data[0].attributes
        console.log("WOUNDSSS", woundsArray, null, 2)
        dispatch(setPatientWounds(woundsArray))
      },
      (err) => {
        console.log("getPatientWounds error:", err);
      }
    )
  }
}

