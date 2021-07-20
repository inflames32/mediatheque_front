import axios from "axios";
import { useState } from "react";

export const AlbumsMiddleware = () => {
  const url = process.env.REACT_APP_URL_BACK_PROD;

  const [albums, setAlbums] = useState([]);
  const [album, setAlbum] = useState({});
  //const [key, setKey] = useState(0);

  //page albums
  const getAllAlbums = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${url}/api/albums/`,
      });
      setAlbums(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  // quand on clique sur un album de la page Albums
  const getOneAlbum = async (albumId) => {
    try {
      const res = await axios({
        method: "get",
        url: `${url}/api/album/${albumId}`,
      });
      setAlbum(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  // supprimer un ablum quan don est dans les détails d'un album
  const deleteAlbumByID = async (albumID) => {
    console.log("deleteAlbumByID");
    try {
      await axios({
        method: "delete",
        url: `${url}/api/album/${albumID}`,
      });
    } catch (e) {
      console.error(e);
    }
  };

  // quand on valide l'ajout d'un album
  const postAlbum = async (data) => {
    try {
      await axios({
        method: "post",
        url: `${url}/api/albums/addAlbum`,
        data,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const deleteAlbumByName = async (albumName) => {
    try {
      await axios({
        method: "delete",
        url: `${url}/api/album/${albumName}`,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return {
    albums,
    album,
    setAlbums,
    getAllAlbums,
    getOneAlbum,
    postAlbum,
    deleteAlbumByID,
    deleteAlbumByName,
  };
};
