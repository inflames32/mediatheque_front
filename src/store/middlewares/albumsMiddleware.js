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
          console.log(res);
          console.log("albumsMiddleware", res.data);
          store.dispatch(successGetAllAlbums(res.data));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(
            errorGetAllAlbums("Impossible de récupérer les albums")
          );
        });
      break;
    }

    case GET_ALBUM_BY_ID: {
      const albumId = store.getState().albumReducer.albumId;

      console.log("albumMiddleware", albumId);
      axios({
        method: "get",
        url: `${url}/album/:${albumId}`,
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(successGetAlbumByID(res.data));
        })
        .catch((err) => {
          store.dispatch(errorGetAlbumByID(err));
        });
      break;
    }
    // adding new album
    case ADDING_NEW_ALBUM: {
      axios({
        method: "post",
        url: `${url}/albums/addAlbum`,
        data: store.getState().album.inputChangeCreateNewAlbum,
      })
        .then((res) => {
          if (res.data.length) {
            console.log(res.data);
            store.dispatch(errorAddingNewAlbum(res.data));
            return;
          }
          store.dispatch(successAddingNewAlbum(res.data));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(errorAddingNewAlbum(err));
        });
      break;
    }
    default:
      return;
  }
};

export default albumsMiddleware;

// quand on clique sur un album de la page Albums
/* const getOneAlbum = async (albumId) => {
    try {
      const res = await axios({
        method: "get",
        url: `${url}/album/${albumId}`,
      });
      setAlbum(res.data);
    } catch (e) {
      console.error(e);
    }
  }; */

// supprimer un ablum quand on est dans les détails d'un album
/* const deleteAlbumByID = async (albumID) => {
    console.log("deleteAlbumByID");
    try {
      const res = await axios({
        method: "delete",
        url: `${url}/album/${albumID}`,
      });
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }
  }; */

// quand on valide l'ajout d'un album

/* const deleteAlbumByName = async (albumName) => {
    try {
      await axios({
        method: "delete",
        url: `${url}/album/${albumName}`,
      });
    } catch (e) {
      console.error(e);
    }
  }; */
