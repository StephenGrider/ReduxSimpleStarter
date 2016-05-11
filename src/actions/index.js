export function selectState(selectedState) {
  console.log('A State has been selected ', selectedState);

  return {
    type: 'STATE_SELECTED',
    payload: selectedState
  }

}
