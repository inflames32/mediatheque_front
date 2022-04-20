import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { Redirect } from "react-router-dom";
import "../../styles/header.css";
import {
  disconnectUser,
  clearState,
  openModalNewAlbum,
  openMenu,
  closeMenu,
} from "../../store/action";

const Header = ({
  logged,
  _id,
  email,
  disconnectUser,
  clearState,
  openMenu,
  closeMenu,
  menuIsOpen,
}) => {
  const handleDisconnectButton = () => {
    disconnectUser();
    console.log("click");
    clearState();
    <Redirect to="/" />;
  };
  const handleClearState = () => {
    clearState();
  };

  const handleMenu = () => {
    openMenu();
  };

  return (
    <nav className="h-15  border-gray-900/1 navigation fixed  z-50 w-11/12 border-b bg-white">
      <div className="flex w-full justify-between pl-2 pr-2">
        <div className="flex space-x-7">
          <div className="box-border flex items-center justify-center">
            <Link
              to="/"
              onClick={handleClearState}
              className="rounded py-2 px-2 font-medium  text-white  no-underline transition duration-300"
            >
              <div className="box-border h-10 w-20">
                <img
                  src="/images/logo.jpg"
                  className="border-gray-900/1 rounded-lg border"
                  alt="ma_mediatheque_logo"
                />
              </div>
            </Link>
          </div>
        </div>
        {/* 	<!-- Secondary Navbar items --> */}
        <div className="hidden items-center space-x-3 md:flex ">
          {logged ? (
            <div>
              <Link to={{ pathname: `/user/${_id}/mon-compte` }}>
                <button className="hover:bg-white-500 button rounded py-2 px-2 font-medium text-gray-500 no-underline transition duration-300 hover:text-white">
                  {email}
                </button>
              </Link>
              <Link to={{ pathname: `/user/${_id}/mes-albums` }}>
                <button className="button rounded py-2 px-2 font-medium text-gray-500 no-underline transition duration-300 hover:bg-green-500 hover:text-white">
                  Ma collection
                </button>
              </Link>
              <button
                className="button rounded py-2 px-2 font-medium text-gray-500 no-underline transition duration-300 hover:bg-red-500 hover:text-white"
                onClick={handleDisconnectButton}
              >
                Déconnexion
              </button>
            </div>
          ) : (
            <div>
              <Link to="/signin">
                <button className="button rounded py-2 px-2 font-medium text-gray-500 no-underline transition duration-300 hover:bg-green-500 hover:text-white">
                  Connexion
                </button>
              </Link>
              <Link to="/albums-publics">
                <button className="button rounded py-2 px-2 font-medium text-gray-500 no-underline transition duration-300 hover:bg-green-500 hover:text-white">
                  Albums publics
                </button>
              </Link>
            </div>
          )}
        </div>
        {/* 	<!-- Mobile menu button --> */}
        <div className="flex items-center md:hidden">
          <button
            className="outline-none mobile-menu-button"
            onClick={handleMenu}
          >
            {!menuIsOpen ? <GiHamburgerMenu /> : <ImCross />}
          </button>
        </div>
      </div>

      {/* mobile menu  */}
      {menuIsOpen && !logged && (
        <Fade down>
          <div className="mobile-menu flex h-full justify-around p-2 duration-300 md:hidden">
            <Link to="/signin">
              <button className="button rounded py-2 px-2 font-medium text-gray-500 no-underline transition duration-300 hover:bg-green-500 hover:text-white">
                Connexion
              </button>
            </Link>
            <Link to="/albums-publics">
              <button className="button rounded py-2 px-2 font-medium text-gray-500 no-underline transition duration-300 hover:bg-green-500 hover:text-white">
                Albums publics
              </button>
            </Link>
          </div>
        </Fade>
      )}
      {menuIsOpen && logged && (
        <Fade down>
          <div className="mobile-menu flex h-full justify-around p-2 duration-300 md:hidden">
            <Link to={{ pathname: `/user/${_id}/mon-compte` }}>
              <button className="button rounded py-2 px-2 font-medium text-gray-500 no-underline transition duration-300 hover:bg-green-500 hover:text-white">
                {email}
              </button>
            </Link>
            <Link to={{ pathname: `/user/${_id}/mes-albums` }}>
              <button className="button rounded py-2 px-2 font-medium text-gray-500 no-underline transition duration-300 hover:bg-green-500 hover:text-white">
                Ma collection
              </button>
            </Link>
            <button
              className="button rounded py-2 px-2 font-medium text-gray-500 no-underline transition duration-300 hover:bg-red-500 hover:text-white"
              onClick={handleDisconnectButton}
            >
              Déconnexion
            </button>
          </div>
        </Fade>
      )}
    </nav>
  );
};
export const MenuTest = () => {
  return <div>TEST</div>;
};

const mapState = (state) => ({
  isLoading: state.albumReducer.isLoading,
  logged: state.user.loggedUser.logged,
  message: state.user.loggedUser.message,
  _id: state.user.loggedUser._id,
  email: state.user.loggedUser.email,
  menuIsOpen: state.user.menuIsOpen,
});

const mapDispatch = (dispatch) => ({
  disconnectUser: () => {
    dispatch(disconnectUser());
  },
  clearState: () => {
    dispatch(clearState());
  },
  openMenu: () => {
    dispatch(openMenu());
  },
  closeMenu: () => {
    dispatch(closeMenu());
  },
});

export default connect(mapState, mapDispatch)(Header);
