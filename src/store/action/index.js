export const OPEN_MODAL_NEW_ALBUM = "OPEN_MODAL_NEW_ALBUM";
export const CLOSE_MODAL_NEW_ALBUM = "CLOSE_MODAL_NEW_ALBUM";
export const INPUT_CHANGE_CREATE_NEW_ALBUM = "INPUT_CHANGE_CREATE_NEW_ALBUM";
// Middleware
export const GET_ALL_ALBUMS = "GET_ALL_ALBUMS";
export const SUCCESS_GETTING_ALL_ALBUMS = "SUCCESS_GETTING_ALL_ALBUMS";
export const ERROR_GETTING_ALL_ALBUMS = "ERROR_GETTING_ALL_ALBUMS";
export const ADD_NEW_ALBUM = "ADD_NEW_ALBUM";

// add album
export const ADDING_NEW_ALBUM = "ADDING_NEW_ALBUM";
export const SUCCESS_ADDING_NEW_ALBUM = "SUCCESS_ADDING_NEW_ALBUM";
export const ERROR_ADDING_NEW_ALBUM = "ERROR_ADDING_NEW_ALBUM";

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
export const getAllAlbums = (payload) => ({
  type: GET_ALL_ALBUMS,
});

export const succesGettingAllAlbums = (payload) => ({
  type: SUCCESS_GETTING_ALL_ALBUMS,
  payload,
});

export const errorGettingAllAlbums = (payload) => ({
  type: ERROR_GETTING_ALL_ALBUMS,
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
