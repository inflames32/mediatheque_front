import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { Redirect } from "react-router-dom";

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
    <nav className="bg-white  w-11/12 h-15 fixed  border-b border-gray-900/1">
      <div className="flex justify-between w-full pl-2 pr-2">
        <div className="flex space-x-7">
          <div className="flex items-center justify-center box-border">
            <Link
              to="/"
              onClick={handleClearState}
              className="py-2 px-2 font-medium text-white  rounded  transition duration-300 no-underline"
            >
              <div className="box-border w-20 h-10">
                <img
                  src="/images/logo.jpg"
                  className="border rounded-lg border-gray-900/1"
                  alt="ma_mediatheque_logo"
                />
              </div>
            </Link>
          </div>
        </div>
        {/* 	<!-- Secondary Navbar items --> */}
        <div className="hidden md:flex items-center space-x-3 ">
          {logged ? (
            <div>
              <Link to={{ pathname: `/user/${_id}/mon-compte` }}>
                <button className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300 no-underline">
                  {email}
                </button>
              </Link>
              <Link to={{ pathname: `/user/${_id}/mes-albums` }}>
                <button className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300 no-underline">
                  Ma collection
                </button>
              </Link>
              <button
                className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-red-500 hover:text-white transition duration-300 no-underline"
                onClick={handleDisconnectButton}
              >
                Déconnexion
              </button>
            </div>
          ) : (
            <div>
              <Link to="/signin">
                <button className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300 no-underline">
                  Connexion
                </button>
              </Link>
              <Link to="/albums-publics">
                <button className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300 no-underline">
                  Albums publics
                </button>
              </Link>
            </div>
          )}
        </div>
        {/* 	<!-- Mobile menu button --> */}
        <div className="md:hidden flex items-center">
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
          <div className="mobile-menu flex justify-around md:hidden duration-300 p-2 h-full">
            <Link to="/signin">
              <button className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300 no-underline">
                Connexion
              </button>
            </Link>
            <Link to="/albums-publics">
              <button className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300 no-underline">
                Albums publics
              </button>
            </Link>
          </div>
        </Fade>
      )}
      {menuIsOpen && logged && (
        <Fade down>
          <div className="mobile-menu flex justify-around md:hidden duration-300 p-2 h-full">
            <Link to={{ pathname: `/user/${_id}/mon-compte` }}>
              <button className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300 no-underline">
                {email}
              </button>
            </Link>
            <Link to={{ pathname: `/user/${_id}/mes-albums` }}>
              <button className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300 no-underline">
                Ma collection
              </button>
            </Link>
            <button
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-red-500 hover:text-white transition duration-300 no-underline"
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
