export default function(state = null, action) {
  switch (action.type) {
    case 'STATE_SELECTED' :
      return action.payload;
  }
  return state;
}
