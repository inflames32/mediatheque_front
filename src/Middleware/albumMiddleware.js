import axios from "axios";
import { useState, useEffect } from "react";

export const AlbumsMiddleware = () => {
  const url = process.env.REACT_APP_URL_BACK_PROD;

  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);
  const [album, setAlbum] = useState({});
  const [key, setKey] = useState(0);

  const getAllAlbums = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${url}/api/albums/`,
      });
      setAlbums(res.data);
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  const getOneAlbum = async (albumID) => {
    try {
      const res = await axios({
        method: "get",
        url: `${url}/api/album/${albumID}`,
      });
      setAlbum(res.data);
      console.log(album);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteAlbumByID = async (albumID) => {
    console.log(albumID);
    try {
      await axios({
        method: "delete",
        url: `${url}/api/album/${albumID}`,
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
        url: `${url}/api/albums/addAlbum`,
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
        url: `${url}/api/album/${albumName}`,
      });
      setKey(key + 1);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    loading,
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
