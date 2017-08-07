import { FETCH_USERS } from '../actions/types';

export default function(state = [], action){
  switch(action.type){
    case FETCH_USERS:
      //take existing state and concatinate new list of uses as well
      return [...state, ...action.payload.data];
  }

  return state;
}
