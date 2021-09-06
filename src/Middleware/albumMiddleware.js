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
        url: `${url}/albums/`,
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
        url: `${url}/album/${albumId}`,
      });
      setAlbum(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  // supprimer un ablum quand on est dans les détails d'un album
  const deleteAlbumByID = async (albumID) => {
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
  };

  // quand on valide l'ajout d'un album
  const postAlbum = async (data) => {
    try {
      await axios({
        method: "post",
        url: `${url}/albums/addAlbum`,
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
        url: `${url}/album/${albumName}`,
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
