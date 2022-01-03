import { useEffect } from "react";
import { connect } from "react-redux";
//import { AlbumsMiddleware } from "../../Middleware/albumMiddleware";

import { GrCaretNext } from "react-icons/gr";
import { Link } from "react-router-dom";

import {
  openModalNewAlbum,
  changeLoading,
  getAlbumByID,
  getAlbumID,
  getAlbumsList,
} from "../../store/action";

import Header from "../Header";
import Footer from "../Footer";
import ModalAddNewAlbum from "../ModalAddNewAlbum";

const MyAlbums = ({
  isLoading,
  modalNewAlbumIsOpen,
  openModalNewAlbum,
  changeLoading,
  successMessage,
  errorMessage,
  listAlbums,
  albumId,
  logged,
  email,
  _id,
  getAlbumID,
  getAlbumsList,
}) => {
  useEffect(() => {
    getAlbumsList();
  }, []);

  const handleOpeningModalNewAlbum = () => {
    openModalNewAlbum();
  };

  const handleAlbumId = (_id) => () => {
    getAlbumID(_id);
  };

  const ImgNotDefined =
    "https://image.flaticon.com/icons/png/256/376/376819.png";

  return (
    <div className="albums">
      <Header />

      <main className="albums-main">
        <div className="btn-add-new-album">
          {isLoading && (
            <div>
              <div>
                liste d'albums en cours de chargement...
                <span>
                  <div animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </span>
              </div>
            </div>
          )}
          {logged && !isLoading && (
            <button
              onClick={handleOpeningModalNewAlbum}
              className="button btn-new-album"
              variant="success"
              type="primary"
            >
              Ajouter un nouvel album à ma collection
            </button>
          )}
          {!logged && !isLoading && (
            <button
              onClick={handleOpeningModalNewAlbum}
              className="button btn-new-album"
              variant="success"
              type="primary"
            >
              Ajouter un nouvel album
            </button>
          )}
          {logged && isLoading && (
            <button
              onClick={handleOpeningModalNewAlbum}
              className="button btn-new-album"
              variant="success"
              type="primary"
            >
              ...Chargement
              <div
                as="span"
                animation="grow"
                size="xl"
                role="status"
                aria-hidden="true"
              />
            </button>
          )}
          {!logged && isLoading && (
            <button
              onClick={handleOpeningModalNewAlbum}
              className="button btn-new-album"
              variant="success"
              type="primary"
            >
              ...Chargement
              <div
                as="span"
                animation="grow"
                size="xl"
                role="status"
                aria-hidden="true"
              />
            </button>
          )}
        </div>
        {modalNewAlbumIsOpen && <ModalAddNewAlbum />}
        <div className="list-albums">
          {listAlbums.length ? (
            listAlbums.map(({ _id, cover, artist, name, year }) => (
              <div className="list-albums-element" key={_id}>
                <div className="cover">
                  {cover ? (
                    <img src={cover} className="card-cover" />
                  ) : (
                    <img src={ImgNotDefined} />
                  )}
                </div>
                <div className="infos">
                  <div>{artist}</div>
                  <div>{name}</div>
                  <div>{year}</div>
                </div>

                <Link
                  to={{
                    pathname: `/album/${_id}`,
                  }}
                  onClick={handleAlbumId(_id)}
                  className="link"
                >
                  <GrCaretNext />
                </Link>
              </div>
            ))
          ) : (
            <div>
              <div>
                <span>Base de données vide :'(</span>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

const mapState = (state) => ({
  modalNewAlbumIsOpen: state.albumReducer.modalNewAlbumIsOpen,
  isLoading: state.albumReducer.isLoading,
  successMessage: state.albumReducer.successMessage,
  errorMessage: state.user.errorMessage,
  listAlbums: state.albumReducer.listAlbums,
  albumId: state.albumReducer.albumId,
  email: state.user.loggedUser.email,
  logged: state.user.loggedUser.logged,
  _id: state.user.loggedUser._id,
});

const mapDispatch = (dispatch) => ({
  openModalNewAlbum: () => {
    dispatch(openModalNewAlbum());
  },
  getAlbumsList: () => {
    dispatch(getAlbumsList());
  },
  changeLoading: () => {
    dispatch(changeLoading());
  },
  getAlbumByID: (_id) => {
    dispatch(getAlbumByID(_id));
  },
  getAlbumID: (_id) => {
    dispatch(getAlbumID(_id));
  },
});

export default connect(mapState, mapDispatch)(MyAlbums);
