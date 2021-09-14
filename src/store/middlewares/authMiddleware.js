import axios from "axios";
import { useState } from "react";

export const AuthMiddleware = () => {
  const url = process.env.REACT_APP_URL_BACK_PROD;

  //const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    email: "",
    auth: "",
  });
  const [auth, setAuth] = useState(false);

  const login = async (data) => {
    const user = await axios({
      method: "post",
      url: `${url}/login`,
      data,
    })
      .then((res) => {
        console.log("20", res.data.result.logged);
        console.log("21", res.data.result.email);
        if (res.data.result.logged === "true") {
          setAuth(true);
          console.log("24", auth);
          setUser({
            email: res.data.result.email,
            auth: res.data.result.logged,
          });
          console.log("{user}", { user });
          console.log("user", user);

          console.log("authentifié? :", auth);
        } else {
          console.log("35", "vous n'êtes pas autentifié");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //setUser(user);
  //console.log(user);
  /* console.log("res.data", user.data);
      setAuth(true); */
  /* } catch (e) {
      console.error(e);
    } */

  const signup = async (data) => {
    console.log("data", data);
    try {
      const res = await axios({
        method: "post",
        url: `${url}/signup`,
        data,
      });
      //setUser(res);
      console.log(user);
      console.log(res.data);
      //setAuth(true);
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
