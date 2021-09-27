import { useEffect } from "react";
import { connect } from "react-redux";
//import { AlbumsMiddleware } from "../../Middleware/albumMiddleware";
import { Card, Spinner, Button } from "react-bootstrap";
import { GrCaretNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

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

import "../../Styles/albumsPublics.scss";

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
    getAllAlbums();
    console.log("sucess de récupération getAllAlbums();");
  }, []);

  const handleOpeningModalNewAlbum = () => {
    console.log("je clique");
    openModalNewAlbum();
  };

  const handleAlbumId = (_id) => () => {
    getAlbumID(_id);
    console.log(_id);
  };

  const ImgNotDefined =
    "https://image.flaticon.com/icons/png/256/376/376819.png";

  return (
    <div className="albums">
      <Header />
      <ToastContainer />
      <main className="albums-main">
        <div className="btn-add-new-album">
          {isLoading ? (
            <Button
              onClick={handleOpeningModalNewAlbum}
              className="button btn-new-album"
              variant="success"
              type="primary"
            >
              <Spinner
                as="span"
                animation="grow"
                size="xl"
                role="status"
                aria-hidden="true"
              />
            </Button>
          ) : (
            <Button
              onClick={handleOpeningModalNewAlbum}
              className="button btn-new-album"
              variant="success"
              type="primary"
            >
              Ajouter un nouvel album
            </Button>
          )}
        </div>
        {modalNewAlbumIsOpen && <ModalAddNewAlbum />}
        <div className="list-albums">
          {listAlbums.length ? (
            listAlbums.map(({ _id, cover, artist, name, year }) => (
              <Card className="list-albums-element" key={_id}>
                <div className="cover">
                  {cover ? (
                    <Card.Img src={cover} className="card-cover" />
                  ) : (
                    <Card.Img src={ImgNotDefined} />
                  )}
                </div>
                <div className="infos">
                  <Card.Title>{artist}</Card.Title>
                  <Card.Title>{name}</Card.Title>
                  <Card.Title>{year}</Card.Title>
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
              </Card>
            ))
          ) : (
            <Card>
              <div>Erreur de récupération ou base de données vide...</div>
            </Card>
          )}
        </div>
      </main>
      <ToastContainer />
      <Footer />
    </div>
  );
};

const mapState = (state) => ({
  modalNewAlbumIsOpen: state.albumReducer.modalNewAlbumIsOpen,
  //isLoading: state.albumMiddleware.isLoading,
  successMessage: state.albumReducer.successMessage,
  errorMessage: state.user.errorMessage,
  listAlbums: state.albumReducer.listAlbums,
  albumId: state.albumReducer.albumId,
  email: state.user.loggedUser.email,
  logged: state.user.loggedUser.logged,
  _id: state.user.loggedUser._id,
  isloading: state.albumReducer.isLoading,
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
