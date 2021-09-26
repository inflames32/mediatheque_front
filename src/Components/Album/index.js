import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { BsPencil, BsTrash, BsInfoCircle } from "react-icons/bs";

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
                <div className="album__card__content__details__title">
                  <div>
                    <BsInfoCircle />
                  </div>
                  <div>Informations sur l'album</div>
                </div>
                <ul className="album__card__content__details__list">
                  <li className="album__card__content__details__name">
                    <div className="informations">
                      <div className="key">Nom de l'album :</div>
                      <div className="valeur">{album.name}</div>
                      <div>
                        <BsPencil
                          className="pencil-icon"
                          //onClick={handleUpdateAlbumDetails}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="album__card__content__details__artist">
                    <div className="informations">
                      <div className="key">Nom de l'artiste :</div>{" "}
                      <div className="valeur">{album.artist}</div>
                      <div>
                        <BsPencil
                          className="pencil-icon"
                          //onClick={handleUpdateAlbumDetails}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="album__card__content__details__style">
                    <div className="informations">
                      <div className="key">Style :</div>{" "}
                      <div className="valeur">{album.style}</div>
                      <div>
                        <BsPencil
                          className="pencil-icon"
                          //onClick={handleUpdateAlbumDetails}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="album__card__content__details__year">
                    <div className="informations">
                      <div className="key">Année :</div>{" "}
                      <div className="valeur">{album.year}</div>
                      <div>
                        <BsPencil
                          className="pencil-icon"
                          //onClick={handleUpdateAlbumDetails}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="album__card__content__details__format">
                    <div className="informations">
                      <div className="key">Format :</div>
                      <div className="valeur">{album.format}</div>
                      <div>
                        <BsPencil
                          className="pencil-icon"
                          //onClick={handleUpdateAlbumDetails}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="album__card__content__details__gencode">
                    <div className="informations">
                      <div className="key">Codebarre :</div>
                      <div className="valeur">{album.gencode}</div>
                      <div>
                        <BsPencil
                          className="pencil-icon"
                          //onClick={handleUpdateAlbumDetails}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="album__card__content__details__delete">
                    <div>
                      <BsTrash onClick={deleteAlbum(albumId)} />
                    </div>
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
