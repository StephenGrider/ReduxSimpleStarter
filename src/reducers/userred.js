import { userlist, showdetails } from '../actions/index';

export default function(state = [], action){
  switch(action.type){
    case 'USER':
    return [...state, ...action.payload.data]

    case 'SHOWDETAILS':
      console.log(action.payload.data.id)
      return {...state, [action.payload.data.id]: action.payload.data }
  }
  return state;
}