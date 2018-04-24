  import {Weather} from '../actions/index';

export default function( state = [], action){
  switch (action.type){
    case 'FETCH_WEATHER':
     //return [ action.payload.data , ...state ]
      return action.payload.data ? [action.payload.data, ...state] : state ;
      
  }
  return state;
}
