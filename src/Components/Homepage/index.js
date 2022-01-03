import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { connect } from "react-redux";

const Homepage = ({ loggedUser }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col w-full h-screen items-center justify-center ">
        <div className="flex-col text-center font-mono w-5/6 items-center text-2xl">
          <p className="sm:text-sm md:text-base">
            Bienvenu(e) sur ce gestionnaire de collection.
          </p>
          <p className="sm:text-sm md:text-base">
            La V1 propose la collection de médias audios.
          </p>
          <p className="sm:text-sm md:text-base">
            Les prochaines versions proposeront d'autres supports à
            collectionner (livres, mangas, comics...).
          </p>
        </div>
        <div>
          <img src="/images/wip.jpg" alt="" />
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
