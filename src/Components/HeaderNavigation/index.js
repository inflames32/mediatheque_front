import { Link } from "react-router-dom";
import {
  Card,
  Button,
  Nav,
  Navbar,
  Container,
  NavDropdown,
} from "react-bootstrap";
import "../../Styles/header-navigation.scss";

const HeaderNavigation = () => {
  return (
    <Navbar expand="xl" className="navbar-color">
      <Container>
        <Navbar.Brand>
          <Link to="/">Ma médiathèque</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Accueil</Link>
            <Link to="/albums">Albums</Link>
            <Link to="/books">Livres</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavigation;
