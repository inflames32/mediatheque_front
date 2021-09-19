export const OPEN_MODAL_NEW_ALBUM = "OPEN_MODAL_NEW_ALBUM";
export const CLOSE_MODAL_NEW_ALBUM = "CLOSE_MODAL_NEW_ALBUM";
export const INPUT_CHANGE_CREATE_NEW_ALBUM = "INPUT_CHANGE_CREATE_NEW_ALBUM";
// Middleware

export const SUCCESS_GETTING_ALL_ALBUMS = "SUCCESS_GETTING_ALL_ALBUMS";
export const ERROR_GETTING_ALL_ALBUMS = "ERROR_GETTING_ALL_ALBUMS";
export const ADD_NEW_ALBUM = "ADD_NEW_ALBUM";

// add album
export const ADDING_NEW_ALBUM = "ADDING_NEW_ALBUM";
export const SUCCESS_ADDING_NEW_ALBUM = "SUCCESS_ADDING_NEW_ALBUM";
export const ERROR_ADDING_NEW_ALBUM = "ERROR_ADDING_NEW_ALBUM";
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
// Open album
export const OPEN_ALBUM_BY_ID = "OPEN_ALBUM_BY_ID";
// My Account

export const CHANGE_LOADING = "CHANGE_LOADING";

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

export const getAlbumByID = (payload) => ({
  type: GET_ALBUM_BY_ID,
  payload,
});

export const successGetAlbumByID = (payload) => ({
  type: SUCCESS_GET_ALBUM_BY_ID,
  payload,
});

export const errorGetAlbumByID = (payload) => ({
  type: ERROR_GET_ALBUM_BY_ID,
  payload,
});
