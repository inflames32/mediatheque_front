import { useEffect } from "react";
import { connect } from "react-redux";
import { FaSpinner } from "react-icons/fa";
import AOS from "aos";

//import { AlbumsMiddleware } from "../../Middleware/albumMiddleware";

import { GrCaretNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

import {
  getAllAlbums,
  openModalNewAlbum,
  changeLoading,
  getAlbumByID,
  getAlbumID,
  getAlbumsList,
} from "../../store/action";

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
    AOS.init();
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
    <div className="bg-slate-200  m-auto box-border h-screen">
      {isLoading ? (
        <div className="m-auto h-full items-center justify-center pt-16 pb-16 xs:flex xs:w-5/6 xs:flex-col">
          <FaSpinner className="h-1/3 w-1/3 animate-spin" />
        </div>
      ) : (
        <div className="m-auto h-full pt-16 pb-16 xs:flex xs:w-5/6  xs:flex-col">
          <div className="flex justify-center p-2">
            <button
              onClick={handleOpeningModalNewAlbum}
              className="rounded py-2 px-2 font-medium text-gray-500 no-underline transition duration-300 hover:bg-green-500 hover:text-white"
              type="button"
            >
              Ajouter un nouvel album
            </button>
          </div>

          {modalNewAlbumIsOpen && <ModalAddNewAlbum />}
          <div className="flex flex-wrap justify-center pb-16 sm:w-full">
            {listAlbums.length ? (
              listAlbums.map(({ _id, cover, artist, name, year }) => (
                <div
                  className="mb-2 mt-2 ml-2 mr-2 rounded-sm bg-gray-50 shadow-md hover:shadow-2xl hover:duration-1000 sm:w-80 md:w-80 lg:w-1/4"
                  key={_id}
                  data-aos="zoom-in"
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
