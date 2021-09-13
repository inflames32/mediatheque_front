//import albumsMiddleware from "../../Middleware/albumsMiddleware";

import {
  OPEN_MODAL_NEW_ALBUM,
  CLOSE_MODAL_NEW_ALBUM,
  INPUT_CHANGE_CREATE_NEW_ALBUM,
  ADDING_NEW_ALBUM,
  SUCCESS_ADDING_NEW_ALBUM,
  ERROR_ADDING_NEW_ALBUM,
} from "../action";

const initialState = {
  modalNewAlbumIsOpen: false,
  isLoading: false,
  inputChangeCreateNewAlbum: {
    album: "",
    artist: "",
    cover: "",
    gencode: "",
    year: "",
    format: "",
    style: "",
  },
  successMessage: "",
  errorMessage: "",
};

const album = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MODAL_NEW_ALBUM:
      return {
        ...state,
        modalNewAlbumIsOpen: true,
      };

    case CLOSE_MODAL_NEW_ALBUM:
      return {
        ...state,
        modalNewAlbumIsOpen: false,
      };

    case INPUT_CHANGE_CREATE_NEW_ALBUM:
      return {
        ...state,
        inputChangeCreateNewAlbum: {
          ...state.inputChangeCreateNewAlbum,
          ...action.payload,
        },
      };

    case ADDING_NEW_ALBUM:
      return {
        ...state,
        //isLoading: true,
      };

    case SUCCESS_ADDING_NEW_ALBUM:
      return {
        ...state,
        successMessage: action.payload,
        //modalNewAlbumIsOpen: false,
      };

    case ERROR_ADDING_NEW_ALBUM:
      return {
        ...state,
        errorMessage: action.payload,
        //modalNewAlbumIsOpen: false,
      };
    default:
      return state;
  }
};
export default album;
