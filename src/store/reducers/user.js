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
  ERROR_DELETE_ACCOUNT,
  SUCCESS_DELETE_ACCOUNT,
  CLEAR_STATE,
  OPEN_MENU,
  CLOSE_MENU,
} from "../action";

const initialState = {
  errorMessage: "",
  successMessage: "",
  loggedUser: {},
  isLoading: false,
  listAlbums: [],
  message: "",
  menuIsOpen: false,
  inputChangeLoginData: {
    email: "",
    password: "",
  },
  inputChangeCreateAccount: {
    email: "",
    password: "",
    password_validation: "",
  },
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        menuIsOpen: !state.menuIsOpen,
      };
    case CLOSE_MENU:
      return {
        ...state,
        menuIsOpen: !state.menuIsOpen,
      };
    case CLEAR_STATE:
      return {
        ...state,
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
        loggedUser: "",
        isLoading: false,
        listAlbums: [],
        message: "",
      };
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
          ...state.inputChangeCreateAccount,
          /* ...action.payload, */
        },
        isLoading: true,
      };
    case ERROR_CREATE_ACCOUNT:
      return {
        ...state,
        errorMessage:
          "Une erreur c'est produite pendant la création de votre compte",
        isLoading: false,
      };
    case SUCCESS_CREATE_ACCOUNT:
      return {
        ...state,
        successMessage: "Votre compte a été crée avec succès!",

        isLoading: false,
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
        isLoading: true,
      };

    case ERROR_LOGIN:
      return {
        ...state,
        isLoading: false,
        errorMessage: "Une erreur c'est produite pendant la connexion",
      };
    case SUCCESS_LOGIN:
      return {
        ...state,
        loggedUser: action.payload,
        logged: true,
        isLoading: false,
        successMessage: "Vous êtes connecté",
      };
    case DISCONNECT_USER:
      return {
        ...state,
        logged: false,
        loggedUser: {},
        inputChangeCreateAccount: {
          email: "",
          password: "",
          password_validation: "",
        },
        inputChangeLoginData: {
          email: "",
          password: "",
        },
        message: "Vous êtes déconnecté",
      };
    case DELETE_ACCOUNT:
      return {
        ...state,
        isloading: true,
        logged: true,
      };
    case SUCCESS_DELETE_ACCOUNT:
      return {
        ...state,
        successMessage: "votre compte a été supprimé",
        isloading: false,
        logged: false,
      };
    case ERROR_DELETE_ACCOUNT:
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
