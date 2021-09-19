import { Link } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import "../../Styles/header.scss";
import { goToMyAccount } from "../../store/action";

const Header = ({ logged, _id, email }) => {
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
              Albums
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
              <Link to="/user/userID/my-account">
                <Button className="signin-btn_connect header__btn_connexion">
                  Bienvenue {email}
                </Button>
              </Link>

              <Link to="/signin">
                <Button className="signin-btn_connect header__btn_disconnect">
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

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Header);
