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
import UserAlbums from "../UserAlbums";
import error404 from "../404error";
import DeleteAccount from "../DeleteAccount";
import Header from "../Header";
import Footer from "../Footer";

import store from "../../store";

import "../../styles/app.css";

// == Composant
const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/albums-publics" component={AlbumsPublics} />
        <Route exact path="/user/:_id/mes-albums" component={UserAlbums} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/user/:_id/mon-compte" component={User} />
        <Route exact path="/album/:_id" component={Album} />
        <Route
          exact
          path="/user/:_id/supprimer-mon-compte"
          component={DeleteAccount}
        />
        <Route component={error404} />
      </Switch>
      <Footer />
    </Provider>
  );
};

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

// == Export
export default connect(mapState, mapDispatch)(App);
