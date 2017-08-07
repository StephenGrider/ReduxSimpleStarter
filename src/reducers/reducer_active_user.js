//return the current user based on who logged in
export default function(state = null, action){
    switch(action.type){
      case 'USER_SELECTED':
        return action.payload;
    }

    return state;
}
