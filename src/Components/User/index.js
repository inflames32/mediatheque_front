import React from "react";
import Footer from "../Footer";
import Header from "../Header";

import { Card, Button } from "react-bootstrap";
import "../../Styles/homepage.scss";

const User = () => {
  return (
    <div className="my-account">
      <Header />
      <main className="my-account__main">
        <Card className="my-account__card">
          <Card.Header>Ma médiathèque</Card.Header>
          <Card.Body>
            <Card.Title>Message de bienvenue</Card.Title>
            <Card.Text>Bienvenu sur votre profil</Card.Text>
          </Card.Body>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default User;
