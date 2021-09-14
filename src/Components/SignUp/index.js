import { React, useState } from "react";
import { connect } from "react-redux";
import Footer from "../Footer";
import Header from "../Header";

import {
  inputChangeCreateAccount,
  submitCreateAccount,
} from "../../store/action";

import { Form, Button, Card } from "react-bootstrap";
import "../../Styles/signup.scss";

const Signup = ({
  errorMessage,
  successMessage,
  inputChangeCreateAccount,
  submitCreateAccount,
}) => {
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    inputChangeCreateAccount({
      [name]: value,
    });
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    submitCreateAccount();
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
                value={inputChangeCreateAccount.email}
              />
              <Form.Text className="text-muted">
                Votre email sera utilisé que pour vous connecter à votre compte.
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
                value={inputChangeCreateAccount.password}
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
                value={inputChangeCreateAccount.password_valdiation}
              />
            </Form.Group>
            <div>
              <Button
                className="no_account not_allowed"
                variant="primary"
                type="submit"
                onClick={onFormSubmit}
              >
                Créer
              </Button>
            </div>
          </Form>
          {errorMessage && <div>{errorMessage}</div>}
          {successMessage && <div>{successMessage}</div>}
        </Card>
      </main>
      <Footer />
    </div>
  );
};
const mapState = (state) => ({
  inputChangeCreateAccount: state.user.inputChangeCreateAccount,
  errorMessage: state.user.errorMessage,
  successMessage: state.user.successMessage,
});

const mapDispatch = (dispatch) => ({
  inputChangeCreateAccount: (changeData) => {
    dispatch(inputChangeCreateAccount(changeData));
  },
  submitCreateAccount: () => {
    dispatch(submitCreateAccount());
  },
});

export default connect(mapState, mapDispatch)(Signup);
