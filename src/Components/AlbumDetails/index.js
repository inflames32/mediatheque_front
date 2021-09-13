import { useState, useEffect } from "react";
//import { AlbumsMiddleware } from "../../Middleware/albumMiddleware";

import { Button, Card } from "react-bootstrap";
import { BsTrash, BsPencil } from "react-icons/bs";

import "../../Styles/album_details.scss";

const AlbumDetails = ({ setAlbumDetailsIsOpen, setIncrement, albumId }) => {
  const [key, setKey] = useState(0);
  //const { deleteAlbumByID, getOneAlbum, album } = AlbumsMiddleware();

  /*   useEffect(() => {
    getOneAlbum(albumId);
  }, []);

  const deleteAlbum = (albumId) => () => {
    console.log(albumId);
    deleteAlbumByID(albumId);
    setIncrement(key + 1);
  }; */

  const closeAlbumDetails = () => {
    setAlbumDetailsIsOpen(false);
  };

  const handleUpdateAlbumDetails = () => {
    console.log("je modifierais les infos de l'album");
  };

  const ImgNotDefined =
    "https://image.flaticon.com/icons/png/128/376/376819.png";

  return (
    <div className="modal-albumDetails ">
      <Card className="modal-content-albumDetails">
        <div className="btn-close" onClick={closeAlbumDetails}></div>
        <Card.Body>
          <div className="modal-content">
            <div className="modal-content-albumDetails-cover">
              {/*   {album.cover ? (
                <Card.Img src={album.cover} />
              ) : (
                <Card.Img src={ImgNotDefined} />
              )} */}
            </div>
            <div>
              <div>
                {/*  <span>Nom de l'album : {album.name}</span> */}
                <span>
                  <BsPencil
                    className="pencil-icon"
                    //onClick={handleUpdateAlbumDetails}
                  />
                </span>
              </div>
              <div>
                {/*  <span>Nom de l'artiste : {album.artist}</span> */}
                <span>
                  <BsPencil
                    className="pencil-icon"
                    //onClick={handleUpdateAlbumDetails}
                  />
                </span>
              </div>
              <div>
                {/*  <span>Style : {album.style}</span> */}
                <span>
                  <BsPencil
                    className="pencil-icon"
                    /* onClick={handleUpdateAlbumDetails} */
                  />
                </span>
              </div>
              <div>
                {/*  <span>Année : {album.year}</span> */}
                <span>
                  <BsPencil
                    className="pencil-icon"
                    /* onClick={handleUpdateAlbumDetails} */
                  />
                </span>
              </div>
              <div>
                <span>{/*  <BsTrash onClick={deleteAlbum(albumId)} /> */}</span>
              </div>
            </div>
          </div>
          <div className="modal-content-btn">
            <Button
              onClick={closeAlbumDetails}
              className="albumDetails-btn-close"
              variant="primary"
            >
              OK
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AlbumDetails;
