import axios from "axios";

const URL = "https://reduxblog.herokuapp.com/api/posts"
const MainURL = `${URL}?key=st0539`;

export const ALLPOSTS = "allposts";

export function allposts() {
  const request = axios.get(MainURL);
  return {
    type: ALLPOSTS,
    payload: request
  };
}