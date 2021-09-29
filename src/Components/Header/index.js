import { Link } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import "../../Styles/header.scss";
import { disconnectUser, clearState } from "../../store/action";

const Header = ({ logged, _id, email, disconnectUser, clearState }) => {
  const handleDisconnect = () => {
    disconnectUser();
  };
  const handleClearState = () => {
    clearState();
  };
  return (
    <Navbar expand="lg" className="homepage__navbar">
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
    </Navbar>
  );
};

const mapState = (state) => ({
  isLoading: state.albumReducer.isLoading,
  logged: state.user.loggedUser.logged,
  message: state.user.loggedUser.message,
  _id: state.user.loggedUser._id,
  email: state.user.loggedUser.email,
});

const mapDispatch = (dispatch) => ({
  disconnectUser: () => {
    dispatch(disconnectUser());
  },
  clearState: () => {
    dispatch(clearState());
  },
});

export default connect(mapState, mapDispatch)(Header);
