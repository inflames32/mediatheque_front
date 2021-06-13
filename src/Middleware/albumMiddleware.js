import axios from "axios";
import { useState, useEffect } from "react";

export const useAlbums = () => {
  const url = process.env.REACT_APP_URL_BACK_DEV;
  const url_prod = process.env.REACT_APP_URL_BACK_PROD;

  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    getAllAlbums();
    console.log("useEffect getAlbums");
  }, [key]);

  const getAllAlbums = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${url_prod}/api/albums/`,
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
        url: `${url}/api/albums/${albumID}`,
      });
      setAlbums(res.data);
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteAlbumID = async (albumID) => {
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

  const postAlbum = async (albumID, data) => {
    try {
      const res = await axios({
        method: "post",
        url: `${url}/api/albums/addAlbum`,
        data,
      });
      setAlbums(res.data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return {
    loading,
    albums,
    setAlbums,
    getAllAlbums,
    getOneAlbum,
    postAlbum,
    deleteAlbumID,
  };
};
