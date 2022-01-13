import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { connect } from "react-redux";
import { BsPencil } from "react-icons/bs";
import { deleteAccount } from "../../store/action";
import { Link } from "react-router-dom";

const User = ({ _id, email, deleteAccount, isLoading }) => {
  return (
    <div className="h-full">
      <Header />
      <div className="flex justify-center items-center pt-16 h-full">
        <div className="">
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
            </div>
            <Link to={{ pathname: `/user/${_id}/supprimer-mon-compte` }}>
              <div className="underline hover:text-red-800 font-bold">
                Supprimer mon compte
              </div>
            </Link>
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
