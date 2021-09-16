import { combineReducers } from "redux";

import albumReducer from "./albumReducer";
import user from "./user";

export default combineReducers({
  albumReducer,
  user,
});
