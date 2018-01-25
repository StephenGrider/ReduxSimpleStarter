import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const CREATE_POST = "create_posts";
export const FETCH_POST = "fetch_post";
export const DELETE_POST = "delete_post";



const ROOT_URL = "https://reduxblog.herokuapp.com/api";
const API_KEY = "?key=mykey4445";
const url = `${ROOT_URL}/posts${API_KEY}`;


export function fetchPosts() {
  
  const request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}


export function createPost(values, callback){
const request = axios.post(url, values)
.then(() => callback());
  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id){
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
.then(() => callback());
  return {
    type: DELETE_POST,
    payload: id
  };
}