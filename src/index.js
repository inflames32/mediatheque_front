import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./Components/App";
import store from "../src/store";
import "bootstrap/dist/css/bootstrap.min.css";

//import reportWebVitals from "./reportWebVitals";

const rootReactElement = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById("root");
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
