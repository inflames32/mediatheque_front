import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { BsPencil, BsTrash } from "react-icons/bs";
import { connect } from "react-redux";
import Header from "../Header";
import Footer from "../Footer";
import { getAlbumByID, deleteAlbumByID } from "../../store/action";
import "../../Styles/album.scss";

const Album = ({
  setAlbumDetailsIsOpen,
  albumId,
  album,
  cover,
  getAlbumByID,
  deleteAlbumByID,
}) => {
  useEffect((albumId) => {
    /*     console.log(albumId); */
    getAlbumByID(albumId);
  }, []);

  const deleteAlbum = (albumId) => () => {
    console.log(albumId);
    deleteAlbumByID(albumId);
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
                <ul className="album__card__content__details__list">
                  <li className="album__card__content__details__name">
                    <span>Nom de l'album : {album.name}</span>
                    <span>
                      <BsPencil
                        className="pencil-icon"
                        //onClick={handleUpdateAlbumDetails}
                      />
                    </span>
                  </li>
                  <li className="album__card__content__details__artist">
                    <span>Nom de l'artiste : {album.artist}</span>
                    <span>
                      <BsPencil
                        className="pencil-icon"
                        //onClick={handleUpdateAlbumDetails}
                      />
                    </span>
                  </li>
                  <li className="album__card__content__details__style">
                    <span>Style : {album.style}</span>
                    <span>
                      <BsPencil
                        className="pencil-icon"
                        /* onClick={handleUpdateAlbumDetails} */
                      />
                    </span>
                  </li>
                  <li className="album__card__content__details__year">
                    <span>Année : {album.year}</span>
                    <span>
                      <BsPencil
                        className="pencil-icon"
                        /* onClick={handleUpdateAlbumDetails} */
                      />
                    </span>
                  </li>
                  <li className="album__card__content__details__format">
                    <span>Format : {album.format}</span>
                    <span>
                      <BsPencil
                        className="pencil-icon"
                        /* onClick={handleUpdateAlbumDetails} */
                      />
                    </span>
                  </li>
                  <li className="album__card__content__details__gencode">
                    <span>Codebarre : {album.gencode}</span>
                    <span>
                      <BsPencil
                        className="pencil-icon"
                        /* onClick={handleUpdateAlbumDetails} */
                      />
                    </span>
                  </li>
                  <li className="album__card__content__details__delete">
                    <span>
                      <BsTrash onClick={deleteAlbum(albumId)} />
                    </span>
                  </li>
                </ul>
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
  deleteAlbumByID: (albumId) => {
    dispatch(deleteAlbumByID(albumId));
  },
});

export default connect(mapState, mapDispatch)(Album);
