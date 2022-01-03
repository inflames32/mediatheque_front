export const OPEN_MODAL_NEW_ALBUM = "OPEN_MODAL_NEW_ALBUM";
export const CLOSE_MODAL_NEW_ALBUM = "CLOSE_MODAL_NEW_ALBUM";
export const INPUT_CHANGE_CREATE_NEW_ALBUM = "INPUT_CHANGE_CREATE_NEW_ALBUM";

// open/close Menu
export const OPEN_MENU = "OPEN_MENU";
export const CLOSE_MENU = "CLOSE_MENU";

// Middleware

export const SUCCESS_GETTING_ALL_ALBUMS = "SUCCESS_GETTING_ALL_ALBUMS";
export const ERROR_GETTING_ALL_ALBUMS = "ERROR_GETTING_ALL_ALBUMS";
export const ADD_NEW_ALBUM = "ADD_NEW_ALBUM";

// add album
export const ADDING_NEW_ALBUM = "ADDING_NEW_ALBUM";
export const SUCCESS_ADDING_NEW_ALBUM = "SUCCESS_ADDING_NEW_ALBUM";
export const ERROR_ADDING_NEW_ALBUM = "ERROR_ADDING_NEW_ALBUM";

// add album to my list
export const ADDING_NEW_ALBUM_TO_MY_LIST = "ADDING_NEW_ALBUM_TO_MY_LIST";
export const SUCCESS_ADDING_NEW_ALBUM_TO_MY_LIST =
  "SUCCESS_ADDING_NEW_ALBUM_TO_MY_LIST";
export const ERROR_ADDING_NEW_ALBUM_TO_MY_LIST =
  "ERROR_ADDING_NEW_ALBUM_TO_MY_LIST";

// get albums list if logged
export const SUCCESS_GET_ALBUMS_LIST = "SUCCESS_GET_ALBUMS_LIST";
export const ERROR_GET_ALBUMS_LIST = "ERROR_GET_ALBUMS_LIST";
export const GET_ALBUMS_LIST = "GET_ALBUMS_LIST";
// create account
export const INPUT_CHANGE_CREATE_ACCOUNT = "INPUT_CHANGE_CREATE_ACCOUNT";
export const SUBMIT_CREATE_ACCOUNT = "SUBMIT_CREATE_ACCOUNT";
export const SUCCESS_CREATE_ACCOUNT = "SUCCESS_CREATE_ACCOUNT";
export const ERROR_CREATE_ACCOUNT = "ERROR_CREATE_ACCOUNT";

// login account
export const INPUT_CHANGE_LOGIN_DATA = "INPUT_CHANGE_LOGIN_DATA";
export const SUBMIT_LOGIN = "SUBMIT_LOGIN";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const ERROR_LOGIN = "ERROR_LOGIN";

// Get album(s)
export const GET_ALBUM_BY_ID = "GET_ALBUM_BY_ID";
export const SUCCESS_GET_ALBUM_BY_ID = "SUCCESS_GET_ALBUM_BY_ID";
export const ERROR_GET_ALBUM_BY_ID = "ERROR_GET_ALBUM_BY_ID";

// Get all albums
export const GET_ALL_ALBUMS = "GET_ALL_ALBUMS";
export const SUCCESS_GET_ALL_ALBUMS = "SUCCESS_GET_ALL_ALBUMS";
export const ERROR_GET_ALL_ALBUMS = "ERROR_GET_ALL_ALBUMS";

// Get all albums
export const GET_ALL_MY_ALBUMS = "GET_ALL_MY_ALBUMS";
export const SUCCESS_GET_ALL_MY_ALBUMS = "SUCCESS_GET_ALL_MY_ALBUMS";
export const ERROR_GET_ALL_MY_ALBUMS = "ERROR_GET_ALL_MY_ALBUMS";

// Open album
export const OPEN_ALBUM_BY_ID = "OPEN_ALBUM_BY_ID";
// Disconnetc User
export const DISCONNECT_USER = "DISCONNECT_USER";
// Get album ID
export const GET_ALBUM_ID = "GET_ALBUM_ID";
export const CHANGE_LOADING = "CHANGE_LOADING";

// open update album by Id
export const OPEN_UPDATE = "OPEN_ALBUM";
export const ERROR_OPEN_UPDATE = "ERROR_OPEN_ALBUM";
export const SUCCESS_OPEN_UPDATE = "SUCCESS_OPEN_ALBUM";

// delete account
export const DELETE_ACCOUNT = "DELETE_ACCOUNT";
export const ERROR_DELETE_ACCOUNT = "ERROR_DELETE_ACCOUNT";
export const SUCCESS_DELETE_ACCOUNT = "SUCCESS_DELETE_ACCOUNT";

// delete album by id
export const DELETE_ALBUM_BY_ID = "DELETE_ALBUM_BY_ID";
export const ERROR_DELETE_ALBUM_BY_ID = "ERROR_DELETE_ALBUM_BY_ID";
export const SUCCESS_DELETE_ALBUM_BY_ID = "SUCCESS_DELETE_ALBUM_BY_ID";

export const CLEAR_STATE = "CLEAR_STATE";

export const clearState = () => ({
  type: CLEAR_STATE,
});
export const openMenu = () => ({
  type: OPEN_MENU,
});
export const closeMenu = () => ({
  type: CLOSE_MENU,
});
export const openUpdate = () => ({
  type: OPEN_UPDATE,
});
export const ErrorOpenUpdate = (payload) => ({
  type: ERROR_OPEN_UPDATE,
  payload,
});
export const SuccessOpenUpdate = (payload) => ({
  type: SUCCESS_OPEN_UPDATE,
  payload,
});
export const changeLoading = (payload) => ({
  type: CHANGE_LOADING,
  payload,
});

export const openModalNewAlbum = () => ({
  type: OPEN_MODAL_NEW_ALBUM,
});

export const closeModalNewAlbum = () => ({
  type: CLOSE_MODAL_NEW_ALBUM,
});

export const inputChangeCreateNewAlbum = (payload) => ({
  type: INPUT_CHANGE_CREATE_NEW_ALBUM,
  payload,
});
// Middleware
export const getAllAlbums = () => ({
  type: GET_ALL_ALBUMS,
});

export const successGetAllAlbums = (payload) => ({
  type: SUCCESS_GET_ALL_ALBUMS,
  payload,
});

export const errorGetAllAlbums = (payload) => ({
  type: ERROR_GET_ALL_ALBUMS,
  payload,
});

export const getAllMyAlbums = () => ({
  type: GET_ALL_MY_ALBUMS,
});

export const successGetAllMyAlbums = (payload) => ({
  type: SUCCESS_GET_ALL_MY_ALBUMS,
  payload,
});

export const errorGetAllMyAlbums = (payload) => ({
  type: ERROR_GET_ALL_MY_ALBUMS,
  payload,
});
// add album
export const addingNewAlbum = () => ({
  type: ADDING_NEW_ALBUM,
});

export const successAddingNewAlbum = (payload) => ({
  type: SUCCESS_ADDING_NEW_ALBUM,
  payload,
});

export const errorAddingNewAlbum = (payload) => ({
  type: ERROR_ADDING_NEW_ALBUM,
  payload,
});

// add album to my list
export const addingNewAlbumToMyList = () => ({
  type: ADDING_NEW_ALBUM_TO_MY_LIST,
});

export const successAddingNewAlbumToMyList = (payload) => ({
  type: SUCCESS_ADDING_NEW_ALBUM_TO_MY_LIST,
  payload,
});

export const errorAddingNewAlbumToMyList = (payload) => ({
  type: ERROR_ADDING_NEW_ALBUM_TO_MY_LIST,
  payload,
});

export const inputChangeCreateAccount = (payload) => ({
  type: INPUT_CHANGE_CREATE_ACCOUNT,
  payload,
});

export const submitCreateAccount = () => ({
  type: SUBMIT_CREATE_ACCOUNT,
});

export const successCreateAccount = () => ({
  type: SUCCESS_CREATE_ACCOUNT,
});

export const errorCreateAccount = (payload) => ({
  type: ERROR_CREATE_ACCOUNT,
  payload,
});

export const inputChangeLoginData = (payload) => ({
  type: INPUT_CHANGE_LOGIN_DATA,
  payload,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const successLogin = (payload) => ({
  type: SUCCESS_LOGIN,
  payload,
});

export const errorLogin = (payload) => ({
  type: ERROR_LOGIN,
  payload,
});

export const getAlbumByID = () => ({
  type: GET_ALBUM_BY_ID,
});

export const successGetAlbumByID = (payload) => ({
  type: SUCCESS_GET_ALBUM_BY_ID,
  payload,
});

export const errorGetAlbumByID = (payload) => ({
  type: ERROR_GET_ALBUM_BY_ID,
  payload,
});

export const disconnectUser = (payload) => ({
  type: DISCONNECT_USER,
  payload,
});

export const getAlbumID = (payload) => ({
  type: GET_ALBUM_ID,
  payload,
});

export const deleteAccount = () => ({
  type: DELETE_ACCOUNT,
});

export const errorDeleteAccount = (payload) => ({
  type: ERROR_DELETE_ACCOUNT,
  payload,
});

export const successDeletedAccount = (payload) => ({
  type: SUCCESS_DELETE_ACCOUNT,
  payload,
});

export const successDeleteAlbumByID = () => ({
  type: SUCCESS_DELETE_ALBUM_BY_ID,
});

export const deleteAlbumByID = () => ({
  type: DELETE_ALBUM_BY_ID,
});

export const errorDeleteAlbumByID = () => ({
  type: ERROR_DELETE_ALBUM_BY_ID,
});

export const getAlbumsList = () => ({
  type: GET_ALBUMS_LIST,
});

export const errorGetAlbumsList = (payload) => ({
  type: ERROR_GET_ALBUMS_LIST,
  payload,
});

export const successGetAlbumsList = (payload) => ({
  type: SUCCESS_GET_ALBUMS_LIST,
  payload,
});
