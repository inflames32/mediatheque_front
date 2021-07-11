import { React, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";

import { Form, Button, Card } from "react-bootstrap";
import "../../Styles/signup.scss";

const Signup = () => {
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
    <div className="signup">
      <Header />
      <body>
        <Card className="signup-card">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Adresse e-mail</Form.Label>
              <Form.Control
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
                type="password"
                placeholder="Mot de passe"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Retaper votre mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Retaper votre mot de passe"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button
              className="no_account not_allowed"
              variant="primary"
              disabled
              type="submit"
              onClick={onFormSubmit}
            >
              Créer
            </Button>
          </Form>
        </Card>
      </body>
      <Footer />
    </div>
  );
};

export default Signup;
