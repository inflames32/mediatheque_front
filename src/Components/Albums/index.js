import { useState, useEffect } from "react";
import { AlbumsMiddleware } from "../../Middleware/albumMiddleware";
import { Card, Spinner, Button } from "react-bootstrap";

import Header from "../Header";
import Footer from "../Footer";
import AddNewAlbum from "../AddNewAlbum";
import AlbumDetails from "../AlbumDetails";
import "../../Styles/album.scss";

function Albums({ albumID }) {
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [AlbumsList, setAlbumsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getAllAlbums, albums, deleteAlbumByID, deleteAlbumByName } =
    AlbumsMiddleware();
  const [key, setKey] = useState(0);
  const [albumDetailsIsOpen, setAlbumDetailsIsOpen] = useState(false);
  const [_id, setAlbumId] = useState();
  const [albumDetails, setAlbumDetails] = useState({
    _id: "",
    cover: "",
    artist: "",
    name: "",
  });

  useEffect(() => {
    setLoading(true);
    getAllAlbums();
    setLoading(false);
  }, [key]);

  // ouvrir/fermer l'ajout d'un album
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // permet de ne pas déclencher la fonction dans le onClick
  // supprimer un album
  const deleteAlbum = (_id) => () => {
    deleteAlbumByID(_id);
    setKey(key + 1);
  };

  const handleAlbumDetails = (_id) => () => {
    setAlbumId(_id);
    setAlbumDetailsIsOpen(true);
  };

  const ImgNotDefined =
    "https://image.flaticon.com/icons/png/256/376/376819.png";

  return (
    <div className="Albums">
      <Header />
      <body>
        <div className="btn-add-new-album">
          <Button
            onClick={openModal}
            className="button btn-new-album"
            variant="success"
            type="primary"
          >
            Ajouter un nouvel album
          </Button>
        </div>
        {ModalIsOpen && (
          <AddNewAlbum
            closeModal={closeModal}
            setModalIsOpen={setModalIsOpen}
            loading={loading}
          />
        )}

        <div className="list-albums">
          {loading ? (
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
            albums.length > 0 &&
            albums.map(({ _id, cover, artist, name }) => (
              <div className="list-albums-element" key={_id}>
                <Card onClick={handleAlbumDetails(_id)}>
                  <Card.Img src={cover} />
                  <Card.Title>{artist}</Card.Title>
                  <Card.Title>{name}</Card.Title>

                  <div>
                    <Spinner />
                  </div>
                </Card>
              </div>
            ))
          )}
        </div>
        {albumDetailsIsOpen && (
          <AlbumDetails
            setAlbumDetailsIsOpen={setAlbumDetailsIsOpen}
            setAlbumId={setAlbumId}
            _id={_id}
            albumDetails={albumDetails}
            setAlbumDetails={setAlbumDetails}
          />
        )}
      </body>
      <Footer />
    </div>
  );
}

export default Albums;
