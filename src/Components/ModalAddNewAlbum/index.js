import { connect } from "react-redux";

import { AiOutlineClose } from "react-icons/ai";

import {
  closeModalNewAlbum,
  inputChangeCreateNewAlbum,
  addingNewAlbum,
  addingNewAlbumToMyList,
} from "../../store/action";

const ModalAddNewAlbum = ({
  closeModalNewAlbum,
  modalNewAlbumIsOpen,
  inputChangeCreateNewAlbum,
  errorMessage,
  successMessage,
  addingNewAlbum,
  loggedUser,
  addingNewAlbumToMyList,
  isLoading,
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
    if (loggedUser) {
      addingNewAlbumToMyList();
    } else {
      addingNewAlbum();
    }
  };

  return (
    <div className="lg:w-full">
      <div className="modal-content-albumDetails">
        <div className="modal-close" onClick={handleCloseModal}>
          <AiOutlineClose />
        </div>
        <form className="form-add-album" onSubmit={onFormSubmit}>
          <div className="mb-3" controlId="formBasicAlbum">
            <label className="label-input">Nom de l'album</label>
            <input
              type="text"
              placeholder="Nom de l'album"
              name="name"
              value={inputChangeCreateNewAlbum.album}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3" controlId="formBasicArtist">
            <label className="label-input">Nom de l'artiste</label>
            <input
              type="text"
              placeholder="Nom de l'artiste"
              name="artist"
              value={inputChangeCreateNewAlbum.artist}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3" controlId="formBasicCover">
            <label className="label-input">Jaquette de l'album</label>
            <input
              type="text"
              placeholder="(URL de l'image"
              name="cover"
              value={inputChangeCreateNewAlbum.cover}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3" controlId="formBasicGencode">
            <label className="label-input">Code barre (si existant)</label>
            <input
              type="number"
              placeholder="Code barre"
              name="gencode"
              value={inputChangeCreateNewAlbum.gencode}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3" controlId="formBasicYear">
            <label className="label-input">Année de sortie</label>
            <input
              type="number"
              placeholder="Année de sortie de l'album"
              name="year"
              value={inputChangeCreateNewAlbum.year}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3" controlId="formBasicFormat">
            <label className="label-input">Format (CD, vinyle, K7...)</label>
            <input
              type="text"
              placeholder="Format de l'album"
              name="format"
              value={inputChangeCreateNewAlbum.format}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3" controlId="formBasicStyle">
            <label className="label-input">
              Style (rock, métal, classique, jazz...)
            </label>
            <input
              type="text"
              placeholder="Style de l'album"
              name="style"
              value={inputChangeCreateNewAlbum.style}
              onChange={handleInputChange}
            />
          </div>
          <div className="btn-action">
            {isLoading ? (
              <div>
                <button
                  type="primary"
                  className="button is-success"
                  onClick={onFormSubmit}
                >
                  <div animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </button>
                <button
                  type="danger"
                  onClick={handleCloseModal}
                  variant="danger"
                  className="button is-cancel"
                >
                  <div animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </button>
              </div>
            ) : (
              <div>
                <button
                  type="primary"
                  className="button is-success"
                  onClick={onFormSubmit}
                >
                  Enregistrer
                </button>
                <button
                  type="danger"
                  onClick={handleCloseModal}
                  variant="danger"
                  className="button is-cancel"
                >
                  Annuler
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  modalNewAlbumIsOpen: state.albumReducer.modalNewAlbumIsOpen,
  inputChangeCreateNewAlbum: state.albumReducer.inputChangeCreateNewAlbum,
  errorMessage: state.albumReducer.errorMessage,
  successMessage: state.albumReducer.successMessage,
  loggedUser: state.user.loggedUser,
  _id: state.user.loggedUser._id,
  isLoading: state.albumReducer.isLoading,
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
    //dispatch(closeModalNewAlbum());
  },
  addingNewAlbumToMyList: () => {
    dispatch(addingNewAlbumToMyList());
    //dispatch(closeModalNewAlbum());
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
