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
	}, [key]); // eslint-disable-line react-hooks/exhaustive-deps

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
		<div className='modal-albumDetails' onClick={closeAlbumDetails}>
			<Card
				className='modal-content-albumDetails'
				onClick={(e) => e.stopPropagation()}>
				<Card.Img />
				<Card.Body>
					<span className='btn-close' onClick={closeAlbumDetails}></span>

          <Card.Text>
            <span>
              {album.cover ? (
                <div className="modal-content-albumDetails-cover">
                  <Card.Img src={album.cover} />
                </div>
              ) : (
                <div className="modal-content-albumDetails-cover">
                  <Card.Img src={ImgNotDefined} />
                </div>
              )}
              {/* <div>album id : {album._id}</div> */}
              <div>Nom de l'album : {album.name}</div>
              <div>Nom de l'artiste : {album.artist}</div>
              <div>Style : {album.style}</div>
              <div>Année : {album.year}</div>
            </span>
            <span>
              <BsPencil
                className="pencil-icon"
                onClick={handleUpdateAlbumDetails}
              />
            </span>
            <br /> <br />
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
