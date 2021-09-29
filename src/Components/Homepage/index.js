import React, { useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import { Card } from "react-bootstrap";
import "../../Styles/homepage.scss";

const Homepage = ({ loggedUser }) => {
  return (
    <div className="homepage">
      <Header />
      <main className="homepage__main">
        <Card className="homepage__main__card">
          <Card.Header className="homepage__main__card__header">
            Ma médiathèque
          </Card.Header>
          <Card.Body className="homepage__main__card__body">
            <Card.Title className="homepage__main__card__body__title">
              Message de bienvenue
            </Card.Title>
            <Card.Text className="homepage__main__card__body__text">
              Bienvenue sur ce site de médiathèque qui vous permettra de
              rajouter les albums de musiques (d'autres fonctionnalités sont
              prévues) que vous possédez afin de suivre votre collection
            </Card.Text>
          </Card.Body>
        </Card>
        <ToastContainer />
      </main>
      <Footer />
    </div>
  );
};

const mapState = (state) => ({
  loggedUser: state.user.loggedUser,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Homepage);
