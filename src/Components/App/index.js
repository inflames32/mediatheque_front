import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

// == Import components
import Homepage from "../Homepage";
import Albums from "../Albums";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import "../../Styles/reset.scss";
import "../../Styles/app.scss";

// == Composant
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/albums" component={Albums} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/signIn" component={SignIn} />
    </Switch>
  );
};

// == Export
export default App;
