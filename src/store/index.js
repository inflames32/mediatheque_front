// == Import : npm
import { createStore, compose, applyMiddleware } from "redux";

// == Import : local
import rootReducer from "./reducers";
import albumsMiddleware from "../store/middlewares/albumsMiddleware";
import userMiddleware from "../store/middlewares/userMiddleware";
// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(albumsMiddleware, userMiddleware)
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers
);

// == Export
export default store;
