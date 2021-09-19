import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { BsPencil } from "react-icons/bs";
import { connect } from "react-redux";
import { getAlbumByID } from "../../store/action";

const Album = ({ setAlbumDetailsIsOpen, setIncrement, albumId, album }) => {
  //const { deleteAlbumByID, getOneAlbum, album } = AlbumsMiddleware();

  useEffect(() => {
    console.log(albumId);
    getAlbumByID(albumId);
    console.log(albumId);
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
    <div className="album ">
      <Card className="album__card">
        <Card.Body>
          <div className="album__card__content">
            <div className="album__card__content__cover">
              {album.cover ? (
                <Card.Img src={album.cover} />
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
                <span>{/*  <BsTrash onClick={deleteAlbum(albumId)} /> */}</span>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapState = (state) => ({
  isLoading: state.album.isLoading,
  successMessage: state.user.successMessage,
  errorMessage: state.user.errorMessage,
  message: state.user.successMessage.message,
  album: state.album.album,
  albumId: state.album.albumId,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Album);
