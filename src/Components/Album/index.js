import { useState, useEffect } from "react";
import { getAllAlbums, useAlbums } from "../../Middleware/albumMiddleware";
import { Card, Button, Spin, Modal, Space } from "antd";
import HN from "../HeaderNavigation";
import Footer from "../FooterSite";
import ModalAlbumAdd from "../ModalAlbumAdd";
import ModalDeleteAlbum from "../ModalDeleteAlbum";
import fakesAlbums from "./fakesAlbums";
import { DeleteFilled, ExclamationCircleOutlined } from "@ant-design/icons";
import { BsTrash } from "react-icons/bs";
import "../../Styles/album.scss";

const { Meta } = Card;
function App({ albumID }) {
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [ModalDeleteAlbumIsOpen, setModalDeleteAlbumIsOpen] = useState(false);
  const [AddNewAlbum, setAddNewAlbum] = useState(fakesAlbums);
  const [nbrAlbum, setNbrAlbum] = useState(0);
  const [AlbumsList, setAlbumsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getAllAlbums, albums, deleteAlbumID } = useAlbums();

  /*   useAlbums(() => {
    console.log(useEffect);
    getAllAlbums();
  }, [key]); */

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const deleteAlbum = (id) => {
    deleteAlbumID(id);
  };

  const handleDeleteAlbum = () => {
    console.log(`je vais delete l'album`);
    setModalDeleteAlbumIsOpen(true);
    //deleteAlbumID(_id);
  };

  const ImgNotDefined =
    "https://image.flaticon.com/icons/png/512/376/376819.png";

  return (
    <div className="App">
      <HN />
      <body>
        <div className="btn-add-new-album">
          <Button
            onClick={openModal}
            className={
              ModalIsOpen
                ? "button btn-new-album is-unseen hidden"
                : "button is-success"
            }
            variant="success"
            type="primary"
          >
            Ajouter un nouvel album
          </Button>
        </div>
        {ModalIsOpen && (
          <ModalAlbumAdd
            setAddNewAlbum={setAddNewAlbum}
            closeModal={closeModal}
            setModalIsOpen={setModalIsOpen}
            fakesAlbums={AddNewAlbum}
            setNbrAlbum={setNbrAlbum}
            laoding={loading}
          />
        )}
        <div>nombre d'albums {nbrAlbum}</div>

        <div className="list-albums">
          {loading && <Spin />}
          {!loading &&
            albums.length > 0 &&
            albums.map(({ _id, profil, artist, name }) => (
              <div className="list-albums-element" key={_id}>
                <Card
                  key={_id}
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={profil} />}
                >
                  <Meta title={artist} description={name} />
                  <br />
                  <span>
                    <BsTrash
                      className="trash-icon"
                      onClick={() => deleteAlbumID(_id)}
                      //onClick={handleDeleteAlbum}
                    />
                  </span>
                </Card>
              </div>
            ))}
          {setModalDeleteAlbumIsOpen && <ModalDeleteAlbum />}
        </div>
      </body>
      <Footer />
    </div>
  );
}

export default App;
