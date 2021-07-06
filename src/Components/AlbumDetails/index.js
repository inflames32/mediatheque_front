import { useState } from "react";
import { AlbumsMiddleware } from "../../Middleware/albumMiddleware";

import { Button, Card } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";

import "../../Styles/album_details.scss";

function AlbumDetails({
  albumDetails,
  setAlbumDetails,
  setAlbumDetailsIsOpen,
  _id,
}) {
  const { deleteAlbumByID, getOneAlbum } = AlbumsMiddleware();
  const [key, setKey] = useState(0);
  console.log(albumDetails);

  const deleteAlbum = (_id) => () => {
    deleteAlbumByID(_id);
    setKey(key + 1);
  };

  const closeAlbumDetails = () => {
    setAlbumDetailsIsOpen(false);
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
            AlbumDetails.name: {albumDetails.name}
            {/*   Dolor excepteur mollit aute veniam mollit sunt cillum.Pariatur
            aliqua ullamco nulla nostrud sint ut esse tempor qui culpa occaecat
            enim commodo. Laboris aliquip officia sint officia dolore do.
            Occaecat adipisicing fugiat voluptate do ullamco magna fugiat do.
            Mollit anim amet anim ut cupidatat adipisicing labore adipisicing
            tempor est. Tempor adipisicing incididunt Lorem elit incididunt aute
            elit sit occaecat non cupidatat minim cupidatat. */}
          </Card.Text>
          <Button
            onClick={closeAlbumDetails}
            className="albumDetails-btn-close"
            variant="primary"
          >
            OK
          </Button>
          <span>
            <BsTrash className="trash-icon" onClick={deleteAlbum(_id)} />
          </span>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AlbumDetails;
