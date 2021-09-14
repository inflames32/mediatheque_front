import axios from "axios";

import {
  SUBMIT_CREATE_ACCOUNT,
  successCreateAccount,
  errorCreateAccount,
} from "../action";

const userMiddleware = (store) => (next) => (action) => {
  const url = process.env.REACT_APP_URL_BACK_PROD;
  const data = store.getState().user.inputChangeCreateAccount;
  console.log(data);
  next(action);
  switch (action.type) {
    // submit create account
    case SUBMIT_CREATE_ACCOUNT: {
      console.log(data);
      axios({
        method: "post",
        url: `${url}/signup`,
        data: data,
      })
        .then((res) => {
          if (res.data.length) {
            console.log(res.data.length);
            store.dispatch(errorCreateAccount(res.data));
            return;
          }
          console.log(res.data);
          store.dispatch(successCreateAccount(res.data));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(errorCreateAccount(err));
        });
      break;
    }

    default:
      return;
  }
};

export default userMiddleware;
