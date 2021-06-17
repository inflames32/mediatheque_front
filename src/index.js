import React from "react";
import { render } from "react-dom";
//import "./Styles/index.css/";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./Components/App";
import "bootstrap/dist/css/bootstrap.min.css";
//import reportWebVitals from "./reportWebVitals";

const rootReactElement = (
  <Router>
    <App />
  </Router>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById("root");
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
