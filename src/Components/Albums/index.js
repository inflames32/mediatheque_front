import { useState, useEffect } from "react";
import { AlbumsMiddleware } from "../../Middleware/albumMiddleware";
import { Card, Spinner, Button } from "react-bootstrap";

import Header from "../Header";
import Footer from "../Footer";
import AddNewAlbum from "../AddNewAlbum";
import AlbumDetails from "../AlbumDetails";
import "../../Styles/album.scss";

const Albums = ({ albumID }) => {
  const { getAllAlbums, getOneAlbum, albums } = AlbumsMiddleware();
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  //const [AlbumsList, setAlbumsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [increment, setIncrement] = useState(0);
  const [albumDetailsIsOpen, setAlbumDetailsIsOpen] = useState(false);
  const [albumId, setAlbumId] = useState();
  const [key, setKey] = useState(0);
  const [albumDetails, setAlbumDetails] = useState({
    _id: "",
  });

  useEffect(() => {
    console.log(isLoading);
    getAllAlbums().then(() => {
      setIsLoading(false);
    });

    console.log(isLoading);
  }, []);

  // ouvrir/fermer l'ajout d'un album
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleAlbumDetails = (_id) => () => {
    setAlbumDetailsIsOpen(true);
    setAlbumId(_id);
    getOneAlbum(_id);
  };

  const ImgNotDefined =
    "https://image.flaticon.com/icons/png/256/376/376819.png";

  return (
    <div className="Albums">
      <Header />
      <main>
        <div className="btn-add-new-album">
          {isLoading ? (
            <Button>
              ...chargement
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
              onClick={openModal}
              className="button btn-new-album"
              variant="success"
              type="primary"
            >
              Ajouter un nouvel album
            </Button>
          )}
        </div>
        {ModalIsOpen && (
          <AddNewAlbum
            closeModal={closeModal}
            setModalIsOpen={setModalIsOpen}
          />
        )}

        <div className="list-albums">
          {isLoading ? (
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
            albums.length >= 1 &&
            albums.map(({ _id, cover, artist, name, year }) => (
              <div className="list-albums-element" key={_id}>
                <Card onClick={handleAlbumDetails(_id)}>
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
          )}
        </div>
        {albumDetailsIsOpen && (
          <AlbumDetails
            setAlbumDetailsIsOpen={setAlbumDetailsIsOpen}
            setAlbumId={setAlbumId}
            albumId={albumId}
            albumDetails={albumDetails}
            setAlbumDetails={setAlbumDetails}
            setIncrement={setIncrement}
            increment={increment}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Albums;
