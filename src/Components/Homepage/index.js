import React, { useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { connect } from "react-redux";

const Homepage = ({ loggedUser }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col w-full h-screen items-center justify-center ">
        <div className="flex text-center font-mono w-5/6 items-center text-2xl ">
          Bienvenue sur ce site de médiathèque qui vous permettra de rajouter
          les albums de musiques (d'autres fonctionnalités sont prévues) que
          vous possédez afin de suivre votre collection
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapState = (state) => ({
  loggedUser: state.user.loggedUser,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Homepage);
