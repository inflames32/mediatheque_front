import { useEffect } from "react";
import { connect } from "react-redux";
import { FaSpinner } from "react-icons/fa";

//import { AlbumsMiddleware } from "../../Middleware/albumMiddleware";

import { GrCaretNext } from "react-icons/gr";
import { Link } from "react-router-dom";

import {
  getAllAlbums,
  openModalNewAlbum,
  changeLoading,
  getAlbumByID,
  getAlbumID,
  getAlbumsList,
} from "../../store/action";

import Header from "../Header";
import Footer from "../Footer";
import ModalAddNewAlbum from "../ModalAddNewAlbum";

const AlbumsList = ({
  isLoading,
  modalNewAlbumIsOpen,
  openModalNewAlbum,
  getAllAlbums,
  listAlbums,
  albumId,
  logged,
  email,
  _id,
  getAlbumID,
}) => {
  useEffect(() => {
    document.title = "Il y'a " + listAlbums.length + " albums publics";
    getAllAlbums();
  }, []);

  const handleOpeningModalNewAlbum = () => {
    openModalNewAlbum();
  };

  const handleAlbumId = (_id) => () => {
    console.log("click");
    getAlbumID(_id);
  };

  const ImgNotDefined =
    "https://static.fnac-static.com/multimedia/Images/FR/MC/02/ff/82/42139394/1507-1/tsp20191127035829/Album-Cover-TS.jpg#077cc621-26af-4063-80bb-5e90c07a92b5";

  return (
    <div className="h-screen  box-border bg-slate-200 m-auto">
      <Header />
      {isLoading ? (
        <div className="h-full pt-16 pb-16 xs:w-5/6 xs:flex xs:flex-col justify-center items-center m-auto">
          <FaSpinner className="animate-spin w-1/3 h-1/3" />
        </div>
      ) : (
        <div className="h-full pt-16 pb-16 xs:w-5/6 xs:flex xs:flex-col  m-auto">
          <div className="flex justify-center p-2">
            <button
              onClick={handleOpeningModalNewAlbum}
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300 no-underline"
              type="button"
            >
              Ajouter un nouvel album
            </button>
          </div>

          {modalNewAlbumIsOpen && <ModalAddNewAlbum />}
          <div className="sm:w-full flex flex-wrap justify-center pb-16">
            {listAlbums.length ? (
              listAlbums.map(({ _id, cover, artist, name, year }) => (
                <div
                  className="sm:w-80 md:w-80 lg:w-1/4 shadow-md mb-2 mt-2 ml-2 mr-2 rounded-sm hover:shadow-2xl hover:duration-1000 bg-gray-50"
                  key={_id}
                >
                  <div className="flex justify-center">
                    {cover ? (
                      <img
                        src={cover}
                        className="card-cover"
                        alt="cover album"
                      />
                    ) : (
                      <img src={ImgNotDefined} alt="no-cover" />
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
                <p>
                  <div>Base de données vide</div>
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

const mapState = (state) => ({
  modalNewAlbumIsOpen: state.albumReducer.modalNewAlbumIsOpen,
  successMessage: state.albumReducer.successMessage,
  errorMessage: state.user.errorMessage,
  listAlbums: state.albumReducer.listAlbums,
  albumId: state.albumReducer.albumId,
  email: state.user.loggedUser.email,
  logged: state.user.loggedUser.logged,
  _id: state.user.loggedUser._id,
  isLoading: state.albumReducer.isLoading,
});

const mapDispatch = (dispatch) => ({
  openModalNewAlbum: () => {
    dispatch(openModalNewAlbum());
  },
  getAllAlbums: () => {
    dispatch(getAllAlbums());
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
  getAlbumsList: () => {
    dispatch(getAlbumsList());
  },
});

export default connect(mapState, mapDispatch)(AlbumsList);
