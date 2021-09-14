import {
  SUBMIT_CREATE_ACCOUNT,
  INPUT_CHANGE_CREATE_ACCOUNT,
  ERROR_CREATE_ACCOUNT,
  SUCCESS_CREATE_ACCOUNT,
} from "../action";

const initialState = {
  login: {
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
    default:
      return state;
  }
};
export default user;
