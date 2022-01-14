import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { connect } from "react-redux";

const Homepage = ({ loggedUser }) => {
  useEffect(() => {
    document.title = "Accueil";
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-col w-full h-screen items-center justify-center ">
        <div className="flex-col text-center font-mono w-5/6 items-center text-2xl">
          <div className="w-4/5 m-auto">
            <p>
              Bienvenu(e) sur ce gestionnaire de collection. La V1 propose la
              collection de médias audios. Les prochaines versions proposeront
              d'autres supports à collectionner (livres, mangas, comics...).
              Vous pouvez consulter les albums publics. Pour commencer votre
              collection, merci de vous identifier en créant un compte en
              cliquant
              <span>
                <Link to="/signUp">
                  <span className="text-blue-900 font-bold underline pl-1">
                    ici
                  </span>
                  .
                </Link>
              </span>
            </p>
          </div>
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
