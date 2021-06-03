import { useState, useEffect } from "react";
import { useAlbums } from "../../Middleware/albumMiddleware";
import { Card, Button } from "antd";
import HN from "../HeaderNavigation";
import Footer from "../FooterSite";
import ModalAlbumAdd from "../ModalAlbumAdd";
import fakesAlbums from "./fakesAlbums";
import "../../Styles/album.scss";
const { Meta } = Card;
function App() {
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [AddNewAlbum, setAddNewAlbum] = useState(fakesAlbums);
  const [nbrAlbum, setNbrAlbum] = useState(0);
  const [AlbumsList, setAlbumsList] = useState([]);
  const { getAllAlbums, albums } = useAlbums();

  useEffect(() => {
    console.log(useEffect);
    getAllAlbums();
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <HN />
      <body>
        <div className="btn-add-new-album">
          <Button
            onClick={openModal}
            className={
              ModalIsOpen
                ? "button btn-new-album is-disabled"
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
          />
        )}
        <div>nombre d'albums {nbrAlbum}</div>
        <div className="list-albums">
          {/*{fakesAlbums.length > 0 &&
            fakesAlbums.map((fakeAlbum) => (
              <div className="list-albums-element" key={fakeAlbum.id}>
                   <Card
                  key={fakeAlbum.id}
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={fakeAlbum.profil} />}
                >
                  <Meta title={fakeAlbum.artist} description={fakeAlbum.name} />
                </Card> */}
          {albums.length > 0 &&
            albums.map(({ id, profil, artist, name }) => (
              <div className="list-albums-element" key={id}>
                <Card
                  //getAllAlbums={getAllAlbums}
                  key={id}
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={profil} />}
                >
                  <Meta title={artist} description={name} />
                </Card>
              </div>
            ))}
        </div>
      </body>
      <Footer />
    </div>
  );
}

export default App;
