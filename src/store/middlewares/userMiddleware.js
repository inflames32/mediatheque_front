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
} from "../action";

const userMiddleware = (store) => (next) => (action) => {
  const url = process.env.REACT_APP_URL_BACK_PROD;
  const data = store.getState().user.inputChangeCreateAccount;
  const id = store.getState().user.loggedUser._id;

  next(action);
  switch (action.type) {
    //delete account
    case DELETE_ACCOUNT: {
      axios({
        method: "delete",
        url: `${url}/user/${id}/supprimer-mon-compte`,
      })
        .then((res) => {
          console.log("res.data", res.data);
          console.log("res", res);
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
    case SUBMIT_LOGIN: {
      axios({
        method: "post",
        url: `${url}/login`,
        data: store.getState().user.inputChangeLoginData,
      })
        .then((res) => {
          store.dispatch(successLogin(res.data));
        })
        .catch((err) => {
          store.dispatch(errorLogin(err));
        });
      break;
    }

    default:
      return;
  }
};

export default userMiddleware;
