import { useState, useEffect } from "react";
import { AlbumsMiddleware } from "../../Middleware/albumMiddleware";
//import { Button } from "antd";

import { Card, Spinner, Button } from "react-bootstrap";
import HN from "../HeaderNavigation";
import Footer from "../Footer";
import ModalAlbumAdd from "../ModalAlbumAdd";
//import ModalDeleteAlbum from "../ModalDeleteAlbum";
import AlbumDetails from "../AlbumDetails";

import { DeleteFilled, ExclamationCircleOutlined } from "@ant-design/icons";
import { BsTrash } from "react-icons/bs";
import "../../Styles/album.scss";

//const { Meta } = Card;
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

  // permet de ne pas déclencher la function dans le onClick
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
    "https://image.flaticon.com/icons/png/512/376/376819.png";

  return (
    <div className="Albums">
      <HN />
      <body>
        <div className="btn-add-new-album">
          {!ModalIsOpen && (
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
          <ModalAlbumAdd
            closeModal={closeModal}
            setModalIsOpen={setModalIsOpen}
            loading={loading}
          />
        )}

        <div className="list-albums">
          {loading ? (
            <div className="div-test">
              <Button variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
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
          />
        )}
      </body>
      <Footer />
    </div>
  );
}

export default Albums;
