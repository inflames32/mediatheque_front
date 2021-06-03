import { useState, useEffect } from "react";
import { Card, Button, Form, Checkbox, Input } from "antd";

import "../../Styles/modalAlbumAdd.scss";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

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
  const [userInputValue, setUserInputValue] = useState("");

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setUserInputValue({
      ...userInputValue,
      [name]: value,
    });
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    setAddNewAlbum([
      ...fakesAlbums,
      {
        id: 10,
        album: userInputValue.album,
        artist: userInputValue.artist,
        profil: userInputValue.profil,
        gencode: userInputValue.gencode,
        year: userInputValue.year,
        format: userInputValue.format,
        style: userInputValue.style,
      },
    ]);
    setNbrAlbum(nbrAlbum + 1);
    setModalIsOpen(false);
    console.log(fakesAlbums);
  };
  return (
    <div className="form-add-album">
      <Form
        {...layout}
        onSubmit={(onFormSubmit, console.log("submit"))}
        className="form-add-album"
      >
        <Form.Item
          label="Nom de l'album"
          type="text"
          name="album"
          value={userInputValue.album}
          //className="modal-card-body input is-hovered"
          placeholder="nom de l'album"
          onChange={handleInputChange}
          rules={[{ required: true, message: "Entrez le titre de l'album!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Nom de l'artiste"
          type="text"
          name="artist"
          value={userInputValue.artist}
          class="modal-card-body input is-hovered"
          placeholder="nom de l'artiste"
          onChange={handleInputChange}
          rules={[{ required: true, message: "Entrez le titre de l'album!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Jaquette de l'album"
          type="text"
          name="profil"
          value={userInputValue.profil}
          class="modal-card-body input is-hovered"
          placeholder="jaquette de l'album"
          onChange={handleInputChange}
          rules={[{ required: false, message: "Entrez le titre de l'album!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Code-barres"
          type="number"
          name="gencode"
          value={userInputValue.gencode}
          class="modal-card-body input is-hovered"
          placeholder="gencode"
          onChange={handleInputChange}
          rules={[{ required: false, message: "Entrez le titre de l'album!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Année de sortie"
          type="number"
          name="year"
          value={userInputValue.year}
          class="modal-card-body input is-hovered"
          placeholder="année de sortie"
          onChange={handleInputChange}
          rules={[{ required: false, message: "Entrez le titre de l'album!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Format de l'album"
          type="text"
          name="format"
          value={userInputValue.format}
          class="modal-card-body input is-hovered"
          placeholder="format (cd, vinyle, K7)"
          onChange={handleInputChange}
          rules={[{ required: true, message: "CD, vinyle, K7..." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Style de l'album"
          type="text"
          name="style"
          value={userInputValue.style}
          class="modal-card-body input is-hovered"
          placeholder="style musical"
          onChange={handleInputChange}
          rules={[
            { required: false, message: "Rock, techno, jazz, classique..." },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
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
        </Form.Item>
      </Form>
    </div>
  );
};

export default ModalAlbumAdd;
