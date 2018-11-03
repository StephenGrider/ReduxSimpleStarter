let axios = require('axios');

// This reducer indicates start of API call
export let startPatientSearch = () => {
  return {
    type: 'Start_Patient_Search'
  }
}

// Tells redux state that api data has been received
export let endPatientSearch = (patientsArray) => {
  return {
    type: 'End_Patient_Search',
    patientsArray
  }
}

// fetches data from api
// export let fetchPatient = () => {
//   let url = "https://api.github.com/search/users?q=language:javascript+location:lagos&sort=repositories&order=desc"
//   return (dispatch) => {
//     // tells state to be on standby to receive data
//     dispatch(startPatientSearch())
//     return axios.get(url).then(
//       (response) => {
//         // when data is received, tells endPatientSearch to update state
//         let patientsArr = response.data.items.slice(0, 10)
//         dispatch(endPatientSearch(patientsArr))
//       },
//       (err) => {
//         console.log(err);
//       }
//     )
//   }
// }
export let fetchPatient = () => {
  let url = "http://localhost:3000/patients"
  return (dispatch) => {
    // tells state to be on standby to receive data
    dispatch(startPatientSearch())
    return axios.get(url).then(
      (response) => {
        // when data is received, tells endPatientSearch to update state
        let patientsArr = response.data.data
        dispatch(endPatientSearch(patientsArr))
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
