import React from "react";
import { connect, Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";

// == Import components
import Homepage from "../Homepage";
import Albums from "../Albums";
import SignUp from "../Signup";
import SignIn from "../Signin";
import User from "../User";
import Album from "../Album";

import store from "../../store";
import "../../Styles/reset.scss";
import "../../Styles/app.scss";

// == Composant
const App = () => {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/albums" component={Albums} />
        <Route exact path="/user/:_id/mes-albums" component={Albums} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/user/:_id/mon-compte" component={User} />
        <Route exact path="/album/:_id" component={Album} />
      </Switch>
    </Provider>
  );
};

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

// == Export
export default connect(mapState, mapDispatch)(App);
