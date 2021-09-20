import {
  OPEN_MODAL_NEW_ALBUM,
  CLOSE_MODAL_NEW_ALBUM,
  INPUT_CHANGE_CREATE_NEW_ALBUM,
  ADDING_NEW_ALBUM,
  SUCCESS_ADDING_NEW_ALBUM,
  ERROR_ADDING_NEW_ALBUM,
  CHANGE_LOADING,
  GET_ALL_ALBUMS,
  SUCCESS_GET_ALL_ALBUMS,
  ERROR_GET_ALL_ALBUMS,
  GET_ALBUM_BY_ID,
  SUCCESS_GET_ALBUM_BY_ID,
  ERROR_GET_ALBUM_BY_ID,
  GET_ALBUM_ID,
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
  albumId: "",
  listAlbums: [],
  loading: false,
  album: {
    name: "",
    artist: "",
    cover: "",
    gencode: "",
    year: "",
    format: "",
    style: "",
  },
  userListAlbums: [],
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

    case GET_ALBUM_BY_ID:
      return {
        ...state,
        album: { ...action.payload },
      };

    case SUCCESS_GET_ALBUM_BY_ID:
      return {
        ...state,
        album: { ...action.payload },
      };

    case ERROR_GET_ALBUM_BY_ID:
      return {
        ...state,
        album: [],
      };

    case GET_ALL_ALBUMS:
      return {
        ...state,
        loading: true,
      };

    case SUCCESS_GET_ALL_ALBUMS:
      return {
        ...state,
        listAlbums: [...action.payload],
        successMessage: "les albums sont récupérés",
        loading: false,
      };

    case ERROR_GET_ALL_ALBUMS:
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
        listAlbums: [],
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

    case CHANGE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case GET_ALBUM_ID:
      return {
        ...state,
        albumId: action.payload,
      };

    default:
      return state;
  }
};
export default album;
