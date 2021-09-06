import { React, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { AuthMiddleware } from "../../Middleware/authMiddleware";

import { Form, Button, Card } from "react-bootstrap";
import "../../Styles/signin.scss";

const Signin = () => {
  const { login, createUser, user } = AuthMiddleware();
  const [userValue, setUserValue] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setUserValue({
      ...userValue,
      [name]: value,
    });
    //console.log(userValue);
  };

  const onFormSubmit = (evt) => {
    /* console.log({
      userValue,
    }); */
    evt.preventDefault();
    setLoading(true);
    login({
      email: userValue.email,
      password: userValue.password,
    });
    setLoading(false);
  };

  return (
    <div className="signin">
      <Header />
      <main className="signin-main">
        <Card className="signin-card ">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Adresse e-mail</Form.Label>
              <Form.Control
                className="user-input"
                type="email"
                name="email"
                value={userValue.email}
                placeholder="Entrez votre email"
                onChange={handleInputChange}
              />
              <Form.Text className="text-muted">
                Votre email sera utilisé que pour vous connecter à votre compte.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                className="user-input"
                type="password"
                name="password"
                value={userValue.password}
                placeholder="Mot de passe"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Restez connecté ?" />
            </Form.Group>
            <div>
              <Button variant="primary" type="submit" onClick={onFormSubmit}>
                Connexion
              </Button>
            </div>

            <Link to="/signup">
              <div className="no_account">Vous n'avez pas de compte ?</div>
            </Link>
          </Form>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Signin;
