import { combineReducers } from "redux";

import album from "./album";
import user from "./user";

export default combineReducers({
  album,
  user,
});
