import { connect } from "react-redux";
import { Form, Button, Card } from "react-bootstrap";

import {
  closeModalNewAlbum,
  inputChangeCreateNewAlbum,
  addingNewAlbum,
} from "../../store/action";

import "../../Styles/add_new_album.scss";

const ModalAddNewAlbum = ({
  closeModalNewAlbum,
  modalNewAlbumIsOpen,
  inputChangeCreateNewAlbum,
  errorMessage,
  successMessage,
  addingNewAlbum,
}) => {
  const handleCloseModal = () => {
    closeModalNewAlbum();
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    inputChangeCreateNewAlbum({
      [name]: value,
    });
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    addingNewAlbum();
    console.log("je submit");

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
  };

  return (
    <div className="modal-form-add-album">
      <Card className="modal-content-albumDetails">
        <Form className="form-add-album" onSubmit={onFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicAlbum">
            <Form.Label className="label-input">Nom de l'album</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nom de l'album"
              name="album"
              value={inputChangeCreateNewAlbum.album}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicArtist">
            <Form.Label className="label-input">Nom de l'artiste</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nom de l'artiste"
              name="artist"
              value={inputChangeCreateNewAlbum.artist}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCover">
            <Form.Label className="label-input">Jaquette de l'album</Form.Label>
            <Form.Control
              type="text"
              placeholder="(URL de l'image"
              name="cover"
              value={inputChangeCreateNewAlbum.cover}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicGencode">
            <Form.Label className="label-input">
              Code barre (si existant)
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Code barre"
              name="gencode"
              value={inputChangeCreateNewAlbum.gencode}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicYear">
            <Form.Label className="label-input">Année de sortie</Form.Label>
            <Form.Control
              type="number"
              placeholder="Année de sortie de l'album"
              name="year"
              value={inputChangeCreateNewAlbum.year}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFormat">
            <Form.Label className="label-input">
              Format (CD, vinyle, K7...)
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Format de l'album"
              name="format"
              value={inputChangeCreateNewAlbum.format}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicStyle">
            <Form.Label className="label-input">
              Style (rock, métal, classique, jazz...)
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Style de l'album"
              name="style"
              value={inputChangeCreateNewAlbum.style}
              onChange={handleInputChange}
            />
          </Form.Group>
          <div className="btn-action">
            <Button
              type="primary"
              className="button is-success"
              onClick={onFormSubmit}
            >
              Enregistrer
            </Button>
            <Button
              type="danger"
              onClick={handleCloseModal}
              variant="danger"
              className="button is-cancel"
            >
              Annuler
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

const mapState = (state) => ({
  modalNewAlbumIsOpen: state.albumReducer.modalNewAlbumIsOpen,
  inputChangeCreateNewAlbum: state.albumReducer.inputChangeCreateNewAlbum,
  errorMessage: state.albumReducer.errorMessage,
  successMessage: state.albumReducer.successMessage,
});

const mapDispatch = (dispatch) => ({
  closeModalNewAlbum: () => {
    dispatch(closeModalNewAlbum());
  },
  inputChangeCreateNewAlbum: (changeData) => {
    dispatch(inputChangeCreateNewAlbum(changeData));
  },
  addingNewAlbum: () => {
    dispatch(addingNewAlbum());
  },
});

/* AddNewAlbum.propTypes = {
  emptyState: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormLogin: PropTypes.func.isRequired,
  loginData: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  loginErrorMessage: PropTypes.string.isRequired,
}; */

export default connect(mapState, mapDispatch)(ModalAddNewAlbum);
