import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { connect } from "react-redux";
import { BsPencil } from "react-icons/bs";
import { deleteAccount } from "../../store/action";

const User = ({ _id, email, deleteAccount, isLoading }) => {
  const handleDeleteAccount = () => {
    deleteAccount();
  };
  return (
    <div className="user">
      <Header />
      <div className="user__main">
        <div className="user__main__card">
          <div>Mon profil</div>
          <div>
            <div>Informations de mon profil</div>
            <div>
              <div>
                <div>Votre id: {_id}</div>
                <div>Votre email : {email}</div>
              </div>
            </div>

            <div>
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
            </div>
          </div>
        </div>
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
