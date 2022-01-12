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
    <div className="h-screen box-border bg-slate-200">
      <Header />

      <main className="albums-main pt-16 h-full">
        <div className="flex justify-center p-2">
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
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300 no-underline"
              variant="success"
              type="primary"
            >
              Ajouter un nouvel album à ma collection
            </button>
          )}
          {!logged && !isLoading && (
            <button
              onClick={handleOpeningModalNewAlbum}
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300 no-underline"
              variant="success"
              type="primary"
            >
              Ajouter un nouvel album
            </button>
          )}
          {logged && isLoading && (
            <button
              onClick={handleOpeningModalNewAlbum}
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300 no-underline"
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
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300 no-underline"
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
        <div className="sm:w-full flex flex-wrap justify-center">
          {listAlbums.length ? (
            listAlbums.map(({ _id, cover, artist, name, year }) => (
              <div
                className="sm:w-80 md:w-80 lg:w-1/4 shadow-md mb-2 mt-2 ml-2 mr-2 rounded-sm hover:shadow-2xl hover:duration-1000 bg-gray-50"
                key={_id}
              >
                <div className="cover flex justify-center">
                  {cover ? (
                    <img src={cover} className="card-cover" alt="cover" />
                  ) : (
                    <img src={ImgNotDefined} alt="cover not found" />
                  )}
                </div>
                <div className="infos">
                  <p className="font-mono text-lg">{artist}</p>
                  <p className="font-mono text-lg">{name}</p>
                  <p className="font-mono text-lg">{year}</p>
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
