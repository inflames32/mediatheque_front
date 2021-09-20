import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { BsPencil } from "react-icons/bs";
import { connect } from "react-redux";
import Header from "../Header";
import Footer from "../Footer";
import { getAlbumByID } from "../../store/action";
import "../../Styles/album.scss";

const Album = ({
  setAlbumDetailsIsOpen,
  setIncrement,
  albumId,
  album,
  cover,
  getAlbumByID,
}) => {
  //const { deleteAlbumByID, getOneAlbum, album } = AlbumsMiddleware();

  useEffect((albumId) => {
    getAlbumByID(albumId);
  }, []);

  /* const deleteAlbum = (albumId) => () => {
    console.log(albumId);
    deleteAlbumByID(albumId);
    setIncrement(key + 1);
  };  */

  const closeAlbumDetails = () => {
    setAlbumDetailsIsOpen(false);
  };

  const handleUpdateAlbumDetails = () => {
    console.log("je modifierais les infos de l'album");
  };

  const ImgNotDefined =
    "https://image.flaticon.com/icons/png/128/376/376819.png";

  return (
    <div className="album">
      <Header />
      <div className="album__main">
        <Card className="album__card">
          <Card.Body className="album__card__body">
            <div className="album__card__content">
              <div className="album__card__content__cover">
                {album.cover ? (
                  <Card.Img src={cover} />
                ) : (
                  <Card.Img src={ImgNotDefined} />
                )}
              </div>
              <div className="album__card__content__details">
                <div className="album__card__content__details__name">
                  <span>Nom de l'album : {album.name}</span>
                  <span>
                    <BsPencil
                      className="pencil-icon"
                      //onClick={handleUpdateAlbumDetails}
                    />
                  </span>
                </div>
                <div className="album__card__content__details__artist">
                  <span>Nom de l'artiste : {album.artist}</span>
                  <span>
                    <BsPencil
                      className="pencil-icon"
                      //onClick={handleUpdateAlbumDetails}
                    />
                  </span>
                </div>
                <div className="album__card__content__details__style">
                  <span>Style : {album.style}</span>
                  <span>
                    <BsPencil
                      className="pencil-icon"
                      /* onClick={handleUpdateAlbumDetails} */
                    />
                  </span>
                </div>
                <div className="album__card__content__details__year">
                  <span>Année : {album.year}</span>
                  <span>
                    <BsPencil
                      className="pencil-icon"
                      /* onClick={handleUpdateAlbumDetails} */
                    />
                  </span>
                </div>
                <div className="album__card__content__details__delete">
                  <span>
                    {/*  <BsTrash onClick={deleteAlbum(albumId)} /> */}
                  </span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

const mapState = (state) => ({
  successMessage: state.user.successMessage,
  errorMessage: state.user.errorMessage,
  message: state.user.successMessage.message,
  album: state.albumReducer.album,
  albumId: state.albumReducer.albumId,
  _id: state.albumReducer.albumId,
  cover: state.albumReducer.album.cover,
});

const mapDispatch = (dispatch) => ({
  getAlbumByID: (albumId) => {
    dispatch(getAlbumByID(albumId));
  },
});

export default connect(mapState, mapDispatch)(Album);
