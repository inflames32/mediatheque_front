import { React, useState } from "react";
import Footer from "../Footer";
import HN from "../HeaderNavigation";

import { Form, Button, Card } from "react-bootstrap";
import "../../Styles/signUp.scss";

const SignUp = () => {
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
    <div className="signUp">
      <HN />
      <body>
        <Card className="signUp-card">
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              {/* <Form.Check type="checkbox" label="Check me out" /> */}
            </Form.Group>
            <Button variant="primary" type="submit" onClick={onFormSubmit}>
              Submit
            </Button>
          </Form>
        </Card>
      </body>
      <Footer />
    </div>
  );
};

export default SignUp;
