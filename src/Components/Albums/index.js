import { useState } from "react";
import { connect } from "react-redux";
//import { AlbumsMiddleware } from "../../Middleware/albumMiddleware";
import { Card, Spinner, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import { openModalNewAlbum } from "../../store/action";

import Header from "../Header";
import Footer from "../Footer";
import ModalAddNewAlbum from "../ModalAddNewAlbum";
import AlbumDetails from "../AlbumDetails";
import "../../Styles/album.scss";
import "react-toastify/dist/ReactToastify.css";

const Albums = ({ isLoading, modalNewAlbumIsOpen, openModalNewAlbum }) => {
  //const { getAllAlbums, getOneAlbum, albums } = AlbumsMiddleware();

  //const [isLoading, setIsLoading] = useState(true);

  const [albumDetailsIsOpen, setAlbumDetailsIsOpen] = useState(false);
  const [albumId, setAlbumId] = useState();
  const [key, setKey] = useState(0);
  const [albumDetails, setAlbumDetails] = useState({
    _id: "",
  });

  /*  useEffect(() => {
    console.log(isLoading);
    getAllAlbums().then(() => {
      isLoading(false);
    });
    console.log(isLoading);
  }, []); */

  // ouvrir/fermer l'ajout d'un album

  const handleOpeningModalNewAlbum = () => {
    console.log("je clique");
    openModalNewAlbum();
  };

  const handleAlbumDetails = (_id) => () => {
    setAlbumDetailsIsOpen(true);
    setAlbumId(_id);
    //getOneAlbum(_id);
  };

  const ImgNotDefined =
    "https://image.flaticon.com/icons/png/256/376/376819.png";

  return (
    <div className="albums">
      <Header />
      <main className="albums-main">
        <div className="btn-add-new-album">
          {isLoading ? (
            <Button>
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
          {/*       {isLoading ? (
            <div className="spinner_loading">
              <Spinner
                as="span"
                animation="grow"
                size="xl"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </div>
          ) : (
            albums.length &&
            albums.map(({ _id, cover, artist, name, year }) => (
              <div className="list-albums-element" key={_id}>
                <Card onClick={handleAlbumDetails(_id)} className="albumcover">
                  {cover ? (
                    <Card.Img src={cover} />
                  ) : (
                    <Card.Img src={ImgNotDefined} />
                  )}
                  <Card.Title>{artist}</Card.Title>
                  <Card.Title>{name}</Card.Title>
                  <Card.Title>{year}</Card.Title>
                </Card>
              </div>
            ))
          )} */}
        </div>
        {albumDetailsIsOpen && (
          <AlbumDetails
            setAlbumDetailsIsOpen={setAlbumDetailsIsOpen}
            setAlbumId={setAlbumId}
            albumId={albumId}
            albumDetails={albumDetails}
            setAlbumDetails={setAlbumDetails}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

const mapState = (state) => ({
  modalNewAlbumIsOpen: state.album.modalNewAlbumIsOpen,
  isLoading: state.album.isLoading,
});

const mapDispatch = (dispatch) => ({
  openModalNewAlbum: () => {
    dispatch(openModalNewAlbum());
  },
});

export default connect(mapState, mapDispatch)(Albums);
