// == Import : npm
import { createStore, compose, applyMiddleware } from "redux";

// == Import : local
import rootReducer from "./reducers";

import albumsMiddleware from "../Middleware/albumsMiddleware";
// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    albumsMiddleware
    // secondMiddleware,
  )
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers
);

// == Export
export default store;
