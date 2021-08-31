import { Link } from "react-router-dom";
import {
  Card,
  Button,
  Nav,
  Navbar,
  Container,
  NavDropdown,
} from "react-bootstrap";
import "../../Styles/header.scss";

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-color">
      <Navbar.Brand>
        <Link to="/" className="logo">
          Ma médiathèque
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto navbar-btn">
          <Link to="/albums">
            <Button className="btn_albumslist">Albums</Button>
          </Link>
          <Link to="/signin">
            <Button className="signin-btn_connect">Connexion</Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
