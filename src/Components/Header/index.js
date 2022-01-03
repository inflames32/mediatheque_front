import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";

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
  /*  const handleDisconnect = () => {
    disconnectUser();
  }; */
  const handleClearState = () => {
    clearState();
  };

  const handleMenu = () => {
    openMenu();
    console.log("jouvre le menu");
  };
  return (
    <nav className="bg-white shadow-lg w-full h-15 fixed-top">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="flex items-center justify-center box-border">
              <Link
                to="/"
                onClick={handleClearState}
                className="py-2 px-2 font-medium text-white  rounded  transition duration-300 no-underline"
              >
                <div className="box-border w-20 h-10">
                  <img src="/images/logo.jpg" alt="ma_mediatheque_logo" />
                </div>
              </Link>
            </div>
          </div>
          {/* 	<!-- Secondary Navbar items --> */}
          <div className="hidden md:flex items-center space-x-3 ">
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
          {/* 	<!-- Mobile menu button --> */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={handleMenu}
            >
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu  */}
      {menuIsOpen && (
        <Fade down>
          <div className="mobile-menu flex justify-around md:hidden duration-300 shadow-md">
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
    </nav>

    /* {<div>
      // est loggué

      {!logged ? (
        <div className="h-6 bg-green-400">
          <Link
            to="/"
            className="navbar__logo header__logo"
            onClick={handleClearState}
          >
            Ma médiathèque
          </Link>
          <Link to="/signin">
            <button className="hover:bg-blue-400">Connexion</button>
          </Link>
          <Link to="/albums-publics">
            <button className="hover:bg-blue-400">Albums publics</button>
          </Link>
        </div>
      ) : (
        // non loggué
        <div>
          <Link
            to="/"
            className="navbar__logo header__logo"
            onClick={handleClearState}
          >
            Ma médiathèque
          </Link>
          <Link
            to={{
              pathname: `/user/${_id}/mon-compte`,
            }}
          >
            <button className="signin-btn_connect header__btn_connexion">
              Bienvenue {email}
            </button>
          </Link>
          <Link
            to={{
              pathname: `/user/${_id}/mes-albums`,
            }}
          >
            <button className="signin-btn_connect header__btn_myAlbums">
              Mes albums
            </button>
          </Link>
          <Link to="/">
            <button
              className="signin-btn_connect header__btn_disconnect"
              onClick={handleDisconnect}
            >
              Se déconnecter
            </button>
          </Link>
        </div>
      )}
    </div>} */
    /* {<Navbar expand="lg" className="homepage__navbar">
      <Navbar.Brand>
        <Link
          to="/"
          className="navbar__logo header__logo"
          onClick={handleClearState}
        >
          Ma médiathèque
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="navbar__burger"
      />
      <Navbar.Collapse id="basic-navbar-nav header__nav">
        <Nav className="me-auto navbar-btn header__btn">
          {!logged ? (
            <div>
              <Link to="/signin">
                <Button className="signin-btn_connect header__btn_connexion">
                  Connexion
                </Button>
              </Link>
              <Link to="/albums-publics">
                <Button className="btn_albumslist header__btn_albums">
                  Albums publics
                </Button>
              </Link>
            </div>
          ) : (
            <div>
              <Link
                to={{
                  pathname: `/user/${_id}/mon-compte`,
                }}
              >
                <Button className="signin-btn_connect header__btn_connexion">
                  Bienvenue {email}
                </Button>
              </Link>
              <Link
                to={{
                  pathname: `/user/${_id}/mes-albums`,
                }}
              >
                <Button className="signin-btn_connect header__btn_myAlbums">
                  Mes albums
                </Button>
              </Link>
              <Link to="/">
                <Button
                  className="signin-btn_connect header__btn_disconnect"
                  onClick={handleDisconnect}
                >
                  Se déconnecter
                </Button>
              </Link>
            </div>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>} */
  );
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
