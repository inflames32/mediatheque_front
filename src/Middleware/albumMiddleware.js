import axios from "axios";
import { useState, useEffect } from "react";

export const AlbumsMiddleware = () => {
  //const url_dev = `http://localhost:5000`;

  const url_prod = process.env.REACT_APP_URL_BACK_PROD;

  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    getAllAlbums();
  }, [key]);

  const getAllAlbums = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${url_prod}/api/albums/`,
      });

      setAlbums(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  const getOneAlbum = async (albumID) => {
    try {
      const res = await axios({
        method: "get",
        url: `${url_prod}/api/albums/${albumID}`,
      });
      setAlbums(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteAlbumByID = async (albumID) => {
    try {
      await axios({
        method: "delete",
        url: `${url_prod}/api/album/${albumID}`,
      });
      setKey(key + 1);
    } catch (e) {
      console.error(e);
    }
  };

  const postAlbum = async (data) => {
    try {
      await axios({
        method: "post",
        url: `${url_prod}/api/albums/addAlbum`,
        data,
      });
      setKey(key + 1);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteAlbumByName = async (albumName) => {
    try {
      await axios({
        method: "delete",
        url: `${url_prod}/api/album/${albumName}`,
      });
      setKey(key + 1);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    loading,
    albums,
    setAlbums,
    getAllAlbums,
    getOneAlbum,
    postAlbum,
    deleteAlbumByID,
    deleteAlbumByName,
  };
};
