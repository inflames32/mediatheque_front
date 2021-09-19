import { Link } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import "../../Styles/header.scss";
import { disconnectUser } from "../../store/action";
import { toast, ToastContainer } from "react-toastify";

const Header = ({ logged, _id, email, disconnectUser }) => {
  const handleDisconnect = () => {
    disconnectUser();
  };
  return (
    <Navbar expand="lg" className="navbar-color">
      <Navbar.Brand>
        <Link to="/" className="navbar__logo header__logo">
          Ma médiathèque
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
      <Navbar.Collapse id="basic-navbar-nav header__nav">
        <Nav className="me-auto navbar-btn header__btn">
          <Link to="/albums">
            <Button className="btn_albumslist header__btn_albums">
              Albums publics
            </Button>
          </Link>
          {!logged ? (
            <Link to="/signin">
              <Button className="signin-btn_connect header__btn_connexion">
                Connexion
              </Button>
            </Link>
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
        {/* <ToastContainer /> */}
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
    /* toast.success("utlisateur déconnecé", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }); */
  },
});

export default connect(mapState, mapDispatch)(Header);
