import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { connect } from "react-redux";

import { Card, Button } from "react-bootstrap";
import "../../Styles/homepage.scss";

const User = ({ _id, email }) => {
  return (
    <div className="my-account">
      <Header />
      <main className="my-account__main">
        <Card className="my-account__card">
          <Card.Header>Ma médiathèque</Card.Header>
          <Card.Body>
            <Card.Title>Message de bienvenue</Card.Title>
            <Card.Text>Bienvenu sur votre profil</Card.Text>
            <Card.Text>Votre id: {_id}</Card.Text>
            <Card.Text>Votre email : {email}</Card.Text>
          </Card.Body>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

const mapState = (state) => ({
  _id: state.user.loggedUser._id,
  email: state.user.loggedUser.email,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(User);
