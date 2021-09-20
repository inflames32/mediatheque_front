import {
  SUBMIT_CREATE_ACCOUNT,
  INPUT_CHANGE_CREATE_ACCOUNT,
  ERROR_CREATE_ACCOUNT,
  SUCCESS_CREATE_ACCOUNT,
  SUBMIT_LOGIN,
  ERROR_LOGIN,
  SUCCESS_LOGIN,
  INPUT_CHANGE_LOGIN_DATA,
  DISCONNECT_USER,
  DELETE_ACCOUNT,
  ERROR_DELETED_ACCOUNT,
  SUCCESS_DELETED_ACCOUNT,
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
  isLoading: false,
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
    case DISCONNECT_USER:
      return {
        ...state,
        logged: false,
        loggedUser: "",
        inputChangeCreateAccount: {
          email: "",
          password: "",
          password_validation: "",
        },
        inputChangeLoginData: {
          email: "",
          password: "",
        },
      };
    case DELETE_ACCOUNT:
      return {
        ...state,
        isloading: true,
      };
    case SUCCESS_DELETED_ACCOUNT:
      return {
        ...state,
        successMessage: "votre compte a été supprimé",
        isloading: false,
        logged: false,
      };
    case ERROR_DELETED_ACCOUNT:
      return {
        ...state,
        successMessage:
          "une erreur est survenu pendant la suppression de votre compte",
        logged: false,
      };

    default:
      return state;
  }
};
export default user;
