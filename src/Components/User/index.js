import { React, useEffect } from "react";
import { connect } from "react-redux";
import { BsPencil } from "react-icons/bs";
import { Link, Redirect } from "react-router-dom";

import Footer from "../Footer";
import Header from "../Header";
import { deleteAccount } from "../../store/action";
import { AiFillFilter } from "react-icons/ai";

const User = ({ _id, email, deleteAccount, isLoading, logged }) => {
  useEffect(() => {
    document.title = "Mon compte";
  }, []);

  const handleDeleteAccount = (id) => {
    deleteAccount(id);
    <Redirect to="/" />;
    console.log("click");
  };

  return (
    <div className="h-full">
      {!logged && <Redirect to="/" />}
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
            <div className="mt-32 flex justify-center">
              <button
                type="button"
                className="no-underline text-red-500 font-bold cursor-pointer  ease-linear duration-200 hover:bg-red-600 hover:text-white border-red-600 border-2 rounded-md p-2"
                onClick={handleDeleteAccount}
              >
                Supprimer mon compte
              </button>
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
  logged: state.user.logged,
});

const mapDispatch = (dispatch) => ({
  deleteAccount: (_id) => {
    dispatch(deleteAccount(_id));
  },
});

export default connect(mapState, mapDispatch)(User);
