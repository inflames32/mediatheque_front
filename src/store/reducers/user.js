import {} from "../actions";

const initialState = {
  
  propIn: false,
  loading:false,
  },
  login: {
    email: "",
    password: "",
  },
  coordonates: {
    lat: "",
    lon: "",
  },
};

export default (state = initialState, action = {}) => {
  /* switch (action.type) {
    case CHOOSE_COUNTRY:
      return {
        ...state,
        choose: action.payload,
      };

    case SELECT_UNIT:
      return {
        ...state,
        units: action.payload,
      };

    case INPUT_CITY_CHANGE:
      return {
        ...state,
        city: action.payload,
      };

    case SUBMIT_WORLD:
      return {
        ...state,
        loading: true,
      };

    case SUBMIT_FRANCE:
      return {
        ...state,
        loading: true,
      };

    case SUBMIT_SUCCESS:
      return {
        ...state,
        loading: false,
        messageSuccess: "Congratulations!",
        API: { ...action.payload },
        apiSuccess: true,
      };

    case SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
        messageError: "Ville inconnue/pas de recherche",
        apiSuccess: false,
        API: {},
      };

    case ON_INPUT_CHANGE:
      return {
        ...state,
        loginData: {
          ...state.loginData,
          ...action.payload,
        },
        isLogged: false,
      }; */

    default:
      return state;
  }
};
