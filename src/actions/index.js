import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
const ROOT_URL = "https://reduxblog.herokuapp.com/api";
const API_KEY = "?key=mykey4445";

export function fetchPosts() {
  const url = `${ROOT_URL}/posts${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
