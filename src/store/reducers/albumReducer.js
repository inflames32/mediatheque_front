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
  ADDING_NEW_ALBUM_TO_MY_LIST,
  ERROR_ADDING_NEW_ALBUM_TO_MY_LIST,
  SUCCESS_ADDING_NEW_ALBUM_TO_MY_LIST,
  GET_ALBUMS_LIST,
  ERROR_GET_ALBUMS_LIST,
  SUCCESS_GET_ALBUMS_LIST,
} from "../action";

const initialState = {
  modalNewAlbumIsOpen: false,
  isLoading: false,
  inputChangeCreateNewAlbum: {
    name: "",
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
        isLoading: true,
      };

    case SUCCESS_GET_ALL_ALBUMS:
      return {
        ...state,
        listAlbums: [...action.payload],
        successMessage: "les albums sont récupérés",
        isLoading: false,
      };

    case ERROR_GET_ALL_ALBUMS:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
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
        isLoading: true,
      };

    case SUCCESS_ADDING_NEW_ALBUM:
      return {
        ...state,
        successMessage: action.payload,
        isLoading: false,
      };

    case ERROR_ADDING_NEW_ALBUM:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
      };

    case ADDING_NEW_ALBUM_TO_MY_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case ERROR_ADDING_NEW_ALBUM_TO_MY_LIST:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
      };
    case SUCCESS_ADDING_NEW_ALBUM_TO_MY_LIST:
      return {
        ...state,
        successMessage: action.payload,
        isLoading: false,
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
    case GET_ALBUMS_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case ERROR_GET_ALBUMS_LIST:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
      };
    case SUCCESS_GET_ALBUMS_LIST:
      return {
        ...state,
        successMessage: action.payload,
        listAlbums: [...action.payload],
        isLoading: false,
      };

    default:
      return state;
  }
};
export default album;
