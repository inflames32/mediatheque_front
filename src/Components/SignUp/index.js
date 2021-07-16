import { React, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { AuthMiddleware } from "../../Middleware/authMiddleware";

import { Form, Button, Card } from "react-bootstrap";
import "../../Styles/signup.scss";

const Signup = () => {
  const { signup, user } = AuthMiddleware();
  const [userValue, setUserInputValue] = useState({});
  const [loading, setLoading] = useState(false);
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setUserInputValue({
      ...userValue,
      [name]: value,
    });
    console.log(userValue);
  };
  const onFormSubmit = (evt) => {
    evt.preventDefault();
    console.log("ici");
    signup({
      email: userValue.email,
      password: userValue.password,
      password_validation: userValue.password_validation,
    });
    console.log(userValue);
    setLoading(true);
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
                name="email"
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
                name="password"
                placeholder="Mot de passe"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPasswordValidation"
            >
              <Form.Label>Retaper votre mot de passe</Form.Label>
              <Form.Control
                type="password"
                name="passsword_validation"
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
