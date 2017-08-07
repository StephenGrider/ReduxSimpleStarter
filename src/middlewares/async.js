//helps with async action
export default function ( {dispatch} ){
  return next => action => {
    //if action does not have a payload or the payload does not have a .then property
    //we don't care about it, send it on
    if(!action.payload || !action.payload.then){
      return next(action);
    }

    //console.log("we have a promise ", action);

    //make sure the action's promise resolves
    action.payload
      .then(function(response){
        //take whatever data the action already contains and extend over it the new paylaod
        //create a new action with the old type, but replace the promise with the response data
        const newAction = {...action, payload: response};

        //use dispatch, take the action & send it through the very topmost reducer again
        dispatch(newAction);
      });
  };
}
