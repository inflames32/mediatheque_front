import { React, useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const Homepage = ({ loggedUser }) => {
  useEffect(() => {
    document.title = "Accueil";
  }, []);

  return (
    <div className="flex h-screen flex-col">
      <div className="flex h-screen w-full flex-col items-center justify-center ">
        <div className="w-5/6 flex-col items-center text-center font-mono text-2xl">
          <div className="m-auto w-4/5">
            <p>
              Bienvenu(e) sur ce gestionnaire de collection. La V1 propose la
              collection de médias audios. Les prochaines versions proposeront
              d'autres supports à collectionner (livres, mangas, comics...).
              Vous pouvez consulter les albums publics. Pour commencer votre
              collection, merci de vous identifier en créant un compte en
              cliquant
              <span>
                <Link to="/signUp">
                  <span className="pl-1 font-bold text-blue-900 underline">
                    ici
                  </span>
                  .
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  loggedUser: state.user.loggedUser,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Homepage);
