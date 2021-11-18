import React from "react";
import { connect, Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";

// == Import components
import Homepage from "../Homepage";
import AlbumsPublics from "../AlbumsPublics";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import User from "../User";
import Album from "../Album";
import MyAlbums from "../MyAlbums";
import error404 from "../404error";

import store from "../../store";

// == Composant
const App = () => {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/albums-publics" component={AlbumsPublics} />
        <Route exact path="/user/:_id/mes-albums" component={MyAlbums} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/user/:_id/mon-compte" component={User} />
        <Route exact path="/album/:_id" component={Album} />
        <Route component={error404} />
      </Switch>
    </Provider>
  );
};

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

// == Export
export default connect(mapState, mapDispatch)(App);
