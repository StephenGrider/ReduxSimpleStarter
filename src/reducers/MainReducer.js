import _ from "lodash";
import { ALLPOSTS } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    
    case ALLPOSTS:
     return _.mapKeys(action.payload.data, "id");
   default:
     return state;
  }
}
