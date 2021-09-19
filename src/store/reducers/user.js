import {
  SUBMIT_CREATE_ACCOUNT,
  INPUT_CHANGE_CREATE_ACCOUNT,
  ERROR_CREATE_ACCOUNT,
  SUCCESS_CREATE_ACCOUNT,
  SUBMIT_LOGIN,
  ERROR_LOGIN,
  SUCCESS_LOGIN,
  INPUT_CHANGE_LOGIN_DATA,
  GO_TO_MY_ACCOUNT,
} from "../action";

const initialState = {
  inputChangeLoginData: {
    email: "",
    password: "",
  },
  inputChangeCreateAccount: {
    email: "",
    password: "",
    password_validation: "",
  },
  errorMessage: "",
  successMessage: "",
  logged: false,
  loggedUser: "",
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case INPUT_CHANGE_CREATE_ACCOUNT:
      return {
        ...state,
        inputChangeCreateAccount: {
          ...state.inputChangeCreateAccount,
          ...action.payload,
        },
      };

    case SUBMIT_CREATE_ACCOUNT:
      return {
        ...state,
        inputChangeCreateAccount: {
          ...state.createAccount,
          ...action.payload,
        },
      };
    case ERROR_CREATE_ACCOUNT:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case SUCCESS_CREATE_ACCOUNT:
      return {
        ...state,
        successMessage: action.payload,
      };
    case INPUT_CHANGE_LOGIN_DATA:
      return {
        ...state,
        inputChangeLoginData: {
          ...state.inputChangeLoginData,
          ...action.payload,
        },
      };
    case SUBMIT_LOGIN:
      return {
        ...state,
      };

    case ERROR_LOGIN:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case SUCCESS_LOGIN:
      return {
        ...state,
        loggedUser: action.payload,
        logged: true,
      };

    default:
      return state;
  }
};
export default user;
