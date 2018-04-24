import { combineReducers } from "redux";
import MainReducer from "./MainReducer";
const rootReducer = combineReducers({
  posts: MainReducer
});

export default rootReducer;
