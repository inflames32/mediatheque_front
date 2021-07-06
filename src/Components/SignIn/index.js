import { React, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import HN from "../HeaderNavigation";

import { Form, Button, Card } from "react-bootstrap";
import "../../Styles/signIn.scss";

const SignIn = () => {
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
    <div className="signIn">
      <HN />
      <body>
        <Card className="signIn-card">
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
            <Button variant="primary" type="submit" onClick={onFormSubmit}>
              Submit
            </Button>
            <Link to="/signUp">
              <Form.Label>Vous n'avez pas de compte ? </Form.Label>
            </Link>
          </Form>
        </Card>
      </body>
      <Footer />
    </div>
  );
};

export default SignIn;
