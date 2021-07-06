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
    <Navbar expand="xl">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Button>Ma médiathèque</Button>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/*   <Link to="/">
              <Button>Accueil</Button>
            </Link> */}
            <Link to="/albums">
              <Button>Albums</Button>
            </Link>
            {/*    <Link to="/books">
              <Button>Livres</Button>
            </Link> */}
            {/*   <Link to="/signUp">
              <Button>Création de compte</Button>
            </Link> */}
            <Link to="/signIn">
              <Button className="signIn-btn_connect">Connexion</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavigation;
