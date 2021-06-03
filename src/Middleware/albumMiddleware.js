import axios from "axios";
import { useState, useEffect } from "react";

export const useAlbums = () => {
  const url = "http://localhost:5000";
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);

  const getAllAlbums = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${url}/api/albums/`,
      });
      setAlbums(res.data);
      console.log("liste des albums récupérés", albums);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
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

  useEffect(() => {
    getAllAlbums();
  });

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
  };
};
