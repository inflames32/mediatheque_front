import { useState, useEffect } from "react";
//import { Card, Button, Checkbox, Input } from "antd";
import { Form, Button } from "react-bootstrap";
import { AlbumsMiddleware } from "../../Middleware/albumMiddleware";

import "../../Styles/modalAlbumAdd.scss";

const ModalAlbumAdd = ({
  closeModal,
  ModalIsOpen,
  setAddNewAlbum,
  fakesAlbums,
  setModalIsOpen,
  setNbrAlbum,
  nbrAlbum,
}) => {
  //state de contrôle des données entrées par l'utilisateur
  const [userInputValue, setUserInputValue] = useState({});

  const { postAlbum } = AlbumsMiddleware();

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    console.log(name, value);
    console.log(userInputValue);
    setUserInputValue({
      ...userInputValue,
      [name]: value,
    });
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    console.log(userInputValue);
    postAlbum({
      name: userInputValue.name,
      artist: userInputValue.artist,
      cover: userInputValue.cover,
      gencode: userInputValue.gencode,
      year: userInputValue.year,
      format: userInputValue.format,
      style: userInputValue.style,
    });
    // collection user
    // const { albumPossédé } = await tacollection.getOne({ _id: iduser })
    // getOneAlbum(id)

    // {
    //  id: 'sonid'
    //  name: 'toto',
    //  albumPossédé : [
    //    'idalbum1', 'idalbum2'
    //  ]
    // }

    setModalIsOpen(false);
  };
  return (
    <div className="form-add-album">
      <Form className="form-add-album" onSubmit={onFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicAlbum">
          <Form.Label>Nom de l'album</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nom de l'album"
            name="name"
            value={userInputValue.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicArtist">
          <Form.Label>Nom de l'artiste</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nom de l'album"
            name="artist"
            value={userInputValue.artist}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCover">
          <Form.Label>Jaquette de l'album</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nom de l'album"
            name="cover"
            value={userInputValue.cover}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicGencode">
          <Form.Label>Code barre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Code barre"
            name="gencode"
            value={userInputValue.gencode}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicYear">
          <Form.Label>Année de sortie</Form.Label>
          <Form.Control
            type="text"
            placeholder="Année de sortie de l'album"
            name="year"
            value={userInputValue.year}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicFormat">
          <Form.Label>Format</Form.Label>
          <Form.Control
            type="text"
            placeholder="Format de l'album"
            name="format"
            value={userInputValue.format}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicStyle">
          <Form.Label>Style</Form.Label>
          <Form.Control
            type="text"
            placeholder="Style de l'album"
            name="style"
            value={userInputValue.style}
            onChange={handleInputChange}
          />
        </Form.Group>
        <div>
          <Button
            type="primary"
            htmlType="submit"
            class="button is-success"
            onClick={onFormSubmit}
          >
            Enregistrer le nouvel album
          </Button>
          <Button
            class="button"
            type="danger"
            onClick={closeModal}
            variant="danger"
          >
            Annuler
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ModalAlbumAdd;
