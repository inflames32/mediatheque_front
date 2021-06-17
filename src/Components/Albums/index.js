import { useState, useEffect } from "react";
import { AlbumsMiddleware } from "../../Middleware/albumMiddleware";
import { Button } from "antd";

import { Card, Spinner } from "react-bootstrap";
import HN from "../HeaderNavigation";
import Footer from "../FooterSite";
import ModalAlbumAdd from "../ModalAlbumAdd";
import ModalDeleteAlbum from "../ModalDeleteAlbum";

import { DeleteFilled, ExclamationCircleOutlined } from "@ant-design/icons";
import { BsTrash } from "react-icons/bs";
import "../../Styles/album.scss";

const { Meta } = Card;
function Albums({ albumID }) {
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [ModalDeleteAlbumIsOpen, setModalDeleteAlbumIsOpen] = useState(false);
  const [nbrAlbum, setNbrAlbum] = useState(0);
  const [AlbumsList, setAlbumsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getAllAlbums, albums, deleteAlbumByID, deleteAlbumByName } =
    AlbumsMiddleware();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setLoading(true);
    getAllAlbums();
    setLoading(false);
  }, [key]);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  // permet de ne pas déclencher la function dans le onClick
  const deleteAlbum = (_id) => () => {
    console.log("id de l'élément target -->", _id);
    //deleteAlbumByID(albumId);
    //setKey(key + 1);
  };

  /*   const deleteAlbumName = (evt) => {
    const name = evt.target.name;
    console.log(name);
    deleteAlbumByName(name);
  }; */

  const handleDeleteAlbum = () => {
    console.log(`je vais delete l'album`);
    setModalDeleteAlbumIsOpen(true);
  };

  const ImgNotDefined =
    "https://image.flaticon.com/icons/png/512/376/376819.png";

  return (
    <div className="Albums">
      <HN />
      <body>
        <div className="btn-add-new-album">
          {ModalIsOpen && (
            <Button
              onClick={openModal}
              className="button btn-new-album"
              variant="success"
              type="primary"
            >
              Ajouter un nouvel album
            </Button>
          )}
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
            setNbrAlbum={setNbrAlbum}
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
            albums.map(({ _id, profil, artist, name }) => (
              <div className="list-albums-element" key={_id}>
                <Card>
                  <Card.Img src={profil} />
                  <Card.Title>{artist}</Card.Title>
                  <Card.Title>{name}</Card.Title>

                  <br />
                  <span>
                    <Button
                      variant="danger"
                      type="button"
                      onClick={deleteAlbum(_id)}
                    >
                      <BsTrash className="trash-icon" />
                    </Button>
                  </span>
                  <div>
                    <Spinner />
                  </div>
                </Card>
              </div>
            ))
          )}
        </div>
      </body>
      <Footer />
    </div>
  );
}

export default Albums;
