import React from "react";
import Footer from "../Footer";
import HN from "../HeaderNavigation";

import { Card, Button } from "react-bootstrap";
import "../../Styles/homepage.scss";

const Homepage = () => {
  return (
    <div className="App">
      <HN />
      <body>
        <Card className="homepage-card">
          <Card.Header>Ma médiathèque</Card.Header>
          <Card.Body>
            <Card.Title>Message de bienvenue</Card.Title>
            <Card.Text>
              Bienvenue sur ce site de médiathèque qui vous permettra de
              rajouter les albums de musqiues et de livres que vous possédez
              afin de suivre votre collection
            </Card.Text>
          </Card.Body>
        </Card>
      </body>
      <Footer />
    </div>
  );
};

export default Homepage;
