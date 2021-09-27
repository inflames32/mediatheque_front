import axios from "axios";

import {
  GET_ALL_ALBUMS,
  errorGetAllAlbums,
  successGetAllAlbums,
  ADDING_NEW_ALBUM,
  successAddingNewAlbum,
  errorAddingNewAlbum,
  GET_ALBUM_BY_ID,
  successGetAlbumByID,
  errorGetAlbumByID,
  DELETE_ALBUM_BY_ID,
  errorDeleteAlbumByID,
  successDeleteAlbumByID,
  ADDING_NEW_ALBUM_TO_MY_LIST,
  successAddingNewAlbumToMyList,
  errorAddingNewAlbumToMyList,
  GET_ALBUMS_LIST,
  successGetAlbumsList,
  errorGetAlbumsList,
} from "../action";

const albumsMiddleware = (store) => (next) => (action) => {
  const url = process.env.REACT_APP_URL_BACK_PROD;

  next(action);
  switch (action.type) {
    // getting all albums
    case GET_ALL_ALBUMS: {
      axios({
        method: "get",
        url: `${url}/albums/`,
      })
        .then((res) => {
          store.dispatch(successGetAllAlbums(res.data));
        })
        .catch((err) => {
          store.dispatch(
            errorGetAllAlbums("Impossible de récupérer les albums")
          );
        });
      break;
    }
    case GET_ALBUMS_LIST: {
      const userId = store.getState().user.loggedUser._id;
      console.log("47", userId);
      axios({
        method: "get",
        url: `${url}/user/${userId}/mes-albums`,
      })
        .then((res) => {
          //console.log("53");
          console.log(res);
          store.dispatch(successGetAlbumsList(res.data));
        })
        .catch((err) => {
          console.log("57");

          store.dispatch(errorGetAlbumsList(err));
        });
      break;
    }

    case GET_ALBUM_BY_ID: {
      const albumId = store.getState().albumReducer.albumId;

      axios({
        method: "get",
        url: `${url}/album/:${albumId}`,
      })
        .then((res) => {
          store.dispatch(successGetAlbumByID(res.data));
        })
        .catch((err) => {
          store.dispatch(errorGetAlbumByID(err));
        });
      break;
    }
    case DELETE_ALBUM_BY_ID: {
      const albumId = store.getState().albumReducer.albumId;

      axios({
        method: "delete",
        url: `${url}/album/:${albumId}`,
      })
        .then((res) => {
          store.dispatch(successDeleteAlbumByID(res.data));
        })
        .catch((err) => {
          store.dispatch(errorDeleteAlbumByID(err));
        });
      break;
    }
    // adding new album
    case ADDING_NEW_ALBUM: {
      axios({
        method: "post",
        url: `${url}/albums/addAlbum`,
        data: store.getState().albumReducer.inputChangeCreateNewAlbum,
      })
        .then((res) => {
          if (res.data.length) {
            store.dispatch(errorAddingNewAlbum(res.data));
            return;
          }
          store.dispatch(successAddingNewAlbum(res.data));
        })
        .catch((err) => {
          store.dispatch(errorAddingNewAlbum(err));
        });
      break;
    }
    case ADDING_NEW_ALBUM_TO_MY_LIST: {
      const data = store.getState().albumReducer.inputChangeCreateNewAlbum;
      const id = store.getState().user.loggedUser._id;

      axios({
        method: "post",
        url: `${url}/user/${id}/mes-albums/add-album`,
        data: data,
      })
        .then((res) => {
          if (res.data.length) {
            store.dispatch(errorAddingNewAlbumToMyList(res.data));
            return;
          }
          store.dispatch(successAddingNewAlbumToMyList(res.data));
        })
        .catch((err) => {
          store.dispatch(errorAddingNewAlbum(err));
        });
      break;
    }
    default:
      return;
  }
};

export default albumsMiddleware;
