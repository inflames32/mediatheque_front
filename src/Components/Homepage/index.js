import React from "react";
import Footer from "../Footer";
import Header from "../Header";

import { Card, Button } from "react-bootstrap";
import "../../Styles/homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <main>
        <Card className="homepage-card">
          <Card.Header>Ma médiathèque</Card.Header>
          <Card.Body>
            <Card.Title>Message de bienvenue</Card.Title>
            <Card.Text>
              Bienvenue sur ce site de médiathèque qui vous permettra de
              rajouter les albums de musiques (d'autres fonctionnalités sont
              prévues) que vous possédez afin de suivre votre collection
            </Card.Text>
          </Card.Body>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
