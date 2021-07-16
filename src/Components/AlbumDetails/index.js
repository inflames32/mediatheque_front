import { useState, useEffect } from "react";
import { AlbumsMiddleware } from "../../Middleware/albumMiddleware";

import { Button, Card } from "react-bootstrap";
import { BsTrash, BsPencil } from "react-icons/bs";

import "../../Styles/album_details.scss";

const AlbumDetails = ({
  setAlbumDetailsIsOpen,
  setIncrement,
  increment,
  albumId,
}) => {
  const [key, setKey] = useState(0);
  const { deleteAlbumByID, getOneAlbum, album } = AlbumsMiddleware();

  useEffect(() => {
    getOneAlbum(albumId);
    console.log(albumId);
  }, [key]);

  const deleteAlbum = (albumId) => () => {
    deleteAlbumByID(albumId);
    setIncrement(key + 1);
  };

  const closeAlbumDetails = () => {
    setAlbumDetailsIsOpen(false);
  };

  const handleUpdateAlbumDetails = () => {
    console.log("je modifierais les infos de l'album");
  };

  const ImgNotDefined =
    "https://image.flaticon.com/icons/png/128/376/376819.png";

  return (
    <div className="modal-albumDetails">
      <Card className="modal-content-albumDetails">
        <Card.Img />
        <Card.Body>
          <span className="btn-close" onClick={closeAlbumDetails}></span>

          <Card.Text>
            {album >= 0 &&
              album.map(({ _id, name, artist, style, cover }) => (
                <div>
                  {cover ? (
                    <span>album cover : {cover}</span>
                  ) : (
                    <span>album cover : {ImgNotDefined}</span>
                  )}
                  <span>album id : {_id}</span>
                  <span>album name : {name}</span>
                  <span>artist : {artist}</span>
                  <span>style : {style}</span>
                </div>
              ))}
            <span>
              <BsPencil
                className="pencil-icon"
                onClick={handleUpdateAlbumDetails}
              />
            </span>
            <br /> <br />
            <div>
              Dolor excepteur mollit aute veniam mollit sunt cillum.Pariatur
              aliqua ullamco nulla nostrud sint ut esse tempor qui culpa
              occaecat enim commodo. Laboris aliquip officia sint officia dolore
              do. Occaecat adipisicing fugiat voluptate do ullamco magna fugiat
              do. Mollit anim amet anim ut cupidatat adipisicing labore
              adipisicing tempor est. Tempor adipisicing incididunt Lorem elit
              incididunt aute elit sit occaecat non cupidatat minim cupidatat.
            </div>
            <br />
          </Card.Text>
          <Button
            onClick={closeAlbumDetails}
            className="albumDetails-btn-close"
            variant="primary"
          >
            OK
          </Button>
          <span>
            <BsTrash className="trash-icon" onClick={deleteAlbum(albumId)} />
          </span>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AlbumDetails;
