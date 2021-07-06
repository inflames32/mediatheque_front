import { React, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

import { Form, Button, Card } from "react-bootstrap";
import "../../Styles/signin.scss";

const Signin = () => {
  const [userInputValue, setUserInputValue] = useState({});
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setUserInputValue({
      ...userInputValue,
      [name]: value,
    });
  };
  const onFormSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <div className="signin">
      <Header />
      <main>
        <Card className="signin-card">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Adresse e-mail</Form.Label>
              <Form.Control
                className="user-input"
                type="email"
                placeholder="Entrez votre email"
                onChange={handleInputChange}
              />
              <Form.Text className="text-muted">
                Votre email ne sera utilisé que pour vous connecter à votre
                compte.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                className="user-input"
                type="password"
                placeholder="Mot de passe"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Restez connecté ?" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled
              onClick={onFormSubmit}
            >
              Connexion
            </Button>
            <Link to="/signUp">
              <span className="no_account">Vous n'avez pas de compte ?</span>
            </Link>
          </Form>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Signin;
