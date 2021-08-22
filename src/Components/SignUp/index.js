import { React, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { AuthMiddleware } from "../../Middleware/authMiddleware";

import { Form, Button, Card } from "react-bootstrap";
import "../../Styles/signup.scss";

const Signup = () => {
  const { signup, user } = AuthMiddleware();
  const [userValue, setUserInputValue] = useState({
    email: "",
    password:"",
    password_validation:''
  });
  const [loading, setLoading] = useState(false);
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setUserInputValue({
      ...userValue,
      [name]: value,  
    });  
  ;
    
  };
  const onFormSubmit = (evt) => {
    evt.preventDefault();   
    signup({
      email: userValue.email,
      password: userValue.password,
      password_validation: userValue.password_validation,
    });       
    setLoading(true);
  };
  return (
    <div className="signup">
      <Header />
      <main className="signup-main">
        <Card className="signup-card">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Adresse e-mail</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Entrez votre email"
                onChange={handleInputChange}
                className="user-input"
              />
              <Form.Text className="text-muted">
                Votre email sera utilisé que pour vous connecter à votre
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
                className="user-input"
              />
               
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPasswordValidation"
            >
              <Form.Label>Retaper votre mot de passe</Form.Label>
              <Form.Control
                type="password"
                name="password_validation"
                placeholder="Retaper votre mot de passe"
                onChange={handleInputChange}
                className="user-input"
              />
            </Form.Group>
            <div>
              <Button
              className="no_account not_allowed"
              variant="primary"
              type="submit"
              onClick={onFormSubmit}            >
              Créer
            </Button></div>
          </Form>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
