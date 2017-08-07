import axios from 'axios';
import {
  FETCH_QUESTIONS,
  FETCH_USERS
} from './types';

//fetch all of the questions for the harry potter quiz
export function fetchQuestions(){
  return {
    type: FETCH_QUESTIONS
  };
}

//fetch all the users via axios
export function fetchUsers(){
  //whenever makes a get requeset returns a promise
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

  //want request to be resolved before sent to reducers so use middleware
  return {
    type: FETCH_USERS,
    payload: request
  };
}
