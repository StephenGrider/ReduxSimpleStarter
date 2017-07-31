import QUESTIONS from '../data.json';
import { FETCH_QUESTIONS } from '../actions';

export default function(state = QUESTIONS, action){
  switch(action.type){
    case FETCH_QUESTIONS:
      return state;
  }

  return state;
}
