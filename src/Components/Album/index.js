import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { BsPencil, BsTrash, BsInfoCircle } from "react-icons/bs";

import { connect } from "react-redux";
import Header from "../Header";
import Footer from "../Footer";
import { getAlbumByID, deleteAlbumByID, openUpdate } from "../../store/action";
import { upperCase } from "lodash";

const Album = ({
  albumId,
  album,
  cover,
  getAlbumByID,
  deleteAlbumByID,
  loggedUser,
  redirect,
}) => {
  const albumArtistName = album.artist;
  const albumName = album.name;
  useEffect((albumId) => {
    document.title = albumName + " - " + upperCase(albumArtistName);
    getAlbumByID(albumId);
  }, []);

  const deleteAlbum = (albumId) => () => {
    deleteAlbumByID(albumId);
    if (redirect) {
      <Redirect to="/" />;
    }
  };

  /* const handleUpdateAlbum = () => {
    //openUpdate();
  }; */

  const ImgNotDefined =
    "https://static.fnac-static.com/multimedia/Images/FR/MC/02/ff/82/42139394/1507-1/tsp20191127035829/Album-Cover-TS.jpg#077cc621-26af-4063-80bb-5e90c07a92b5";

  return (
    <div className="h-full justify-center mb-10 mt-15">
      <Header />
      <div className="flex w-11/12 h-full justify-center items-center text-center m-auto pt-16">
        <div className="card lg:h-1/2 xs:w-11/12 xs:flex-col md:h-auto md:flex-col lg:w-11/12 lg:flex-col border-2 rounded-md pb-2 ">
          {/* <div className="lg:w-1/2 lg:h-full lg:shadows-2xl flex justify-center"> */}
          {album.cover ? (
            <img src={cover} alt="cover" className="w-full m-auto" />
          ) : (
            <img
              src={ImgNotDefined}
              alt="no-cover"
              className="max-w-1/2 m-auto"
            />
          )}
          {/* </div> */}

          <ul className="font-bold flex flex-col m-auto w-10/12">
            <li className="">
              <div className="flex items-center p-2">
                <BsInfoCircle />
                Informations sur l'album
              </div>
              <div className="flex flex-row">
                <div className="key">Nom de l'album :</div>
                <div className="valeur">{album.name}</div>
                {/* <div>
                        <BsPencil
                          className="pencil-icon"
                          onClick={handleUpdateAlbum(albumId)}
                        />
                      </div> */}
              </div>
            </li>
            <li className="">
              <div className="flex flex-row">
                <div className="key">Nom de l'artiste :</div>
                <div className="valeur">{album.artist}</div>
                {/* <div>
                        <BsPencil
                          className="pencil-icon"
                          onClick={handleUpdateAlbum(albumId)}
                        />
                      </div> */}
              </div>
            </li>
            <li className="">
              <div className="flex flex-row">
                <div className="key">Style :</div>{" "}
                <div className="valeur">{album.style}</div>
                {/* <div>
                        <BsPencil
                          className="pencil-icon"
                          onClick={handleUpdateAlbum(albumId)}
                        />
                      </div> */}
              </div>
            </li>
            <li className="">
              <div className="flex flex-row">
                <div className="key">Année :</div>{" "}
                <div className="valeur">{album.year}</div>
                {/* <div>
                        <BsPencil
                          className="pencil-icon"
                          onClick={handleUpdateAlbum(albumId)}
                        />
                      </div> */}
              </div>
            </li>
            <li className="">
              <div className="flex flex-row">
                <div className="key">Format :</div>
                <div className="valeur">{album.format}</div>
                {/* <div>
                        <BsPencil
                          className="pencil-icon"
                          onClick={handleUpdateAlbum(albumId)}
                        />
                      </div> */}
              </div>
            </li>
            <li className="">
              <div className="flex flex-row">
                <div className="key">Codebarre :</div>
                <div className="valeur">{album.gencode}</div>
                {/* <div>
                        <BsPencil
                          className="pencil-icon"
                          onClick={handleUpdateAlbum(albumId)}
                        />
                      </div> */}
              </div>
            </li>
            <li className="">
              <div title="Supprimer l'album?">
                <BsTrash onClick={deleteAlbum(albumId)} />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapState = (state) => ({
  successMessage: state.user.successMessage,
  errorMessage: state.user.errorMessage,
  loggedUser: state.user.loggedUser,
  album: state.albumReducer.album,
  albumId: state.albumReducer.albumId,
  _id: state.albumReducer.albumId,
  cover: state.albumReducer.album.cover,
  redirect: state.albumReducer.redirect,
});

const mapDispatch = (dispatch) => ({
  getAlbumByID: (albumId) => {
    dispatch(getAlbumByID(albumId));
  },
  deleteAlbumByID: (albumId) => {
    dispatch(deleteAlbumByID(albumId));
  },

  /*  openUpdate: (albumId) => {
    dispatch(openUpdate(albumId));
  }, */
});

export default connect(mapState, mapDispatch)(Album);
