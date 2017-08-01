import axios from 'axios';
import {
  FETCH_QUESTIONS
} from './types';

//fetch all of the questions for the harry potter quiz
export function fetchQuestions(){
  //const request = axios.get('url to do get request too');
  //fetch all of the questions
  //whenver axios makes a get request it returns a promise
  
  return {
    type: FETCH_QUESTIONS
  };
}
