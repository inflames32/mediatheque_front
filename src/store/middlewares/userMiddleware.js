import axios from "axios";

import {
  SUBMIT_CREATE_ACCOUNT,
  successCreateAccount,
  errorCreateAccount,
  SUBMIT_LOGIN,
  errorLogin,
  successLogin,
  DELETE_ACCOUNT,
  successDeletedAccount,
  errorDeleteAccount,
  SUBMIT_DISCONNECT_USER,
  disconnectUser,
  errorDisconnectUser,
} from "../action";

const userMiddleware = (store) => (next) => (action) => {
  const url = process.env.REACT_APP_URL_BACK_PROD;
  const data = store.getState().user.inputChangeCreateAccount;
  const id = store.getState().user.loggedUser._id;

  next(action);
  switch (action.type) {
    //delete account
    case DELETE_ACCOUNT: {
      console.log("ici");
      axios({
        method: "delete",
        url: `${url}/user/${id}/supprimer-mon-compte`,
      })
        .then((res) => {
          console.log("res.data", res.data);
          store.dispatch(successDeletedAccount(res));
        })
        .catch((err) => {
          store.dispatch(errorDeleteAccount(err));
        });
      break;
    }
    // submit create account
    case SUBMIT_CREATE_ACCOUNT: {
      axios({
        method: "post",
        url: `${url}/signup`,
        data: data,
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(successCreateAccount(res.data));
        })
        .catch((err) => {
          store.dispatch(errorCreateAccount(err));
        });
      break;
    }

    // submit login
    case SUBMIT_LOGIN: {
      axios({
        method: "post",
        url: `${url}/login`,
        data: store.getState().user.inputChangeLoginData,
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(successLogin(res.data));
        })
        .catch((err) => {
          store.dispatch(errorLogin(err, "utilisateur non reconnu"));
        });
      break;
    }
    // submit logout
    case SUBMIT_DISCONNECT_USER: {
      axios({
        method: "post",
        url: `${url}/logout`,
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(disconnectUser());
        })
        .catch((err) => {
          store.dispatch(errorDisconnectUser());
          console.log(err);
        });
      break;
    }

    default:
      return;
  }
};

export default userMiddleware;
