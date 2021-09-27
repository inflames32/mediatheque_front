import axios from "axios";

import {
  SUBMIT_CREATE_ACCOUNT,
  successCreateAccount,
  errorCreateAccount,
  SUBMIT_LOGIN,
  errorLogin,
  successLogin,
} from "../action";

const userMiddleware = (store) => (next) => (action) => {
  const url = process.env.REACT_APP_URL_BACK_PROD;
  const data = store.getState().user.inputChangeCreateAccount;

  next(action);
  switch (action.type) {
    // submit create account
    case SUBMIT_CREATE_ACCOUNT: {
      axios({
        method: "post",
        url: `${url}/signup`,
        data: data,
      })
        .then((res) => {
          console.log(res);
          store.dispatch(successCreateAccount(res.data.successMessage));
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
