import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { connect } from "react-redux";
import { BsPencil } from "react-icons/bs";
import { deleteAccount } from "../../store/action";
import { Button } from "react-bootstrap";

import { Card } from "react-bootstrap";

const User = ({ _id, email, deleteAccount, isLoading }) => {
  const handleDeleteAccount = () => {
    deleteAccount();
  };
  return (
    <div className="user">
      <Header />
      <div className="user__main">
        <Card className="user__main__card">
          <Card.Header>Mon profil</Card.Header>
          <Card.Body>
            <Card.Title>Informations de mon profil</Card.Title>
            <Card.Text>
              <div>
                <div>Votre id: {_id}</div>
                <div>Votre email : {email}</div>
              </div>
            </Card.Text>

            <Card.Text>
              <div>
                <BsPencil
                  className="pencil-icon"
                  //onClick={handleUpdateAlbum(albumId)}
                />
              </div>
              {/*  <Button variant="danger" onClick={handleDeleteAccount()}>
                Supprimer mon compte
              </Button> */}
              {/* {isLoading ? (
                <Button variant="danger">
                  <Spinner>...chargement </Spinner>
                </Button>
              ) : (
                <Button variant="danger" onClick={handleBtnDeleteAccount(_id)}>
                  Supprimer mon compte
                </Button>
              )} */}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

const mapState = (state) => ({
  _id: state.user.loggedUser._id,
  email: state.user.loggedUser.email,
  isLoading: state.user.isLoading,
});

const mapDispatch = (dispatch) => ({
  deleteAccount: (_id) => {
    dispatch(deleteAccount(_id));
  },
});

export default connect(mapState, mapDispatch)(User);
