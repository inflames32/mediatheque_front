import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

// == Import components
import Homepage from "../Homepage";
import Albums from "../Albums";
import "../../Styles/reset.scss";
import "../../Styles/app.scss";
//import "antd/dist/antd.css";

// == Composant
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/albums" component={Albums} />
    </Switch>
  );
};

// == Export
export default App;
