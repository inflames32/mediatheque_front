import { React, useEffect } from "react";
import { connect } from "react-redux";
import { BsPencil } from "react-icons/bs";
import { Link, Redirect } from "react-router-dom";

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

      <div className="flex h-full items-center justify-center pt-16">
        <div className="">
          <div>
            <div>Informations de mon profil</div>
            <div>
              <div>
                <div>Mon id: {_id}</div>
                <div>Mon email : {email}</div>
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
                className="cursor-pointer rounded-md border-2 border-red-600  p-2 font-bold text-red-500 no-underline duration-200 ease-linear hover:bg-red-600 hover:text-white"
                onClick={handleDeleteAccount}
              >
                Supprimer mon compte
              </button>
            </div>
          </div>
        </div>
      </div>
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
