import axios from "axios";
import { useState, useEffect } from "react";

export const useAlbums = () => {
  const url = "http://localhost:5000";
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

  /* const addAlbum = async (req, res) => {
  try {
    const res = await axios({
      method: "post",
      url: `${url}/api/album/add-album`,
    });
  } catch (e) {
    console.error(e);
  }
}; */

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
