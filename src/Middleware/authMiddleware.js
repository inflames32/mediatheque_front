import axios from "axios";
import { useState, useEffect } from "react";

export const AuthMiddleware = () => {
  const url = process.env.REACT_APP_URL_BACK_PROD;
  //const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(false);

  const login = async (data) => {
    try {
      const res = await axios({
        method: "post",
        url: `${url}/api/login`,
        data,
      });
      setUser(res);
      console.log(user);
      console.log(res.data);
      setAuth(true);
    } catch (e) {
      console.error(e);
    }
  };

  const signup = async (data) => {
    //console.log("ici");
    try {
      const res = await axios({
        method: "post",
        url: `${url}/api/register`,
        data,
      });
      //setUser(res);
      console.log(user);
      console.log(res.data);
      setAuth(true);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    login,
    user,
    signup,
  };
};
