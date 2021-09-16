import { React, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../Footer";
import Header from "../Header";

import {
  inputChangeLoginData,
  INPUT_CHANGE_LOGIN_DATA,
  submitLogin,
  successLogin,
} from "../../store/action";
import { Form, Button, Card } from "react-bootstrap";
import "../../Styles/signin.scss";

const Signin = ({
  inputChangeLoginData,
  submitLogin,
  logged,
  successMessage,
  errorMessage,
  message,
  id,
}) => {
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    inputChangeLoginData({
      [name]: value,
    });
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    submitLogin();
  };

  /*   if (userValue.email && userValue.password === "") {
    setBtnSubmitIsDisabled(false);
  } */
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
                value={inputChangeLoginData.email}
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
                value={inputChangeLoginData.password}
                placeholder="Mot de passe"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Restez connecté ?" />
            </Form.Group>
            <div>
              <Button
                //disabled={btnSubmitIsDisabled}
                type="submit"
                onClick={onFormSubmit}
                /* className={
                  userValue.email && userValue.password
                    ? "btn--ok"
                    : "btn--disabled"
                } */
              >
                Connexion
              </Button>
            </div>

            <Link to="/signup">
              <div className="no_account">Vous n'avez pas de compte ?</div>
            </Link>
          </Form>
          {logged && (
            <div>
              <p>{message}</p>
              <p>{id}</p>
            </div>
          )}
          {/*  {successMessage && <div>{successMessage}</div>} */}
          {/*  {successMessage.map((elem) => (
            <span>{elem.successMessage.message}</span>
          ))} */}
          {/* {errorMessage.map((elem) => (
            <span>{elem.errorMessage}</span>
          ))} */}
          {/* {errorMessage && <div>{errorMessage}</div>} */}

          {/*   {auth ? (
            <div>vous êtes authentifié</div>
          ) : (
            <div>vous n'êtes pas authentifié</div>
          )} */}
        </Card>
      </main>

      <Footer />
    </div>
  );
};

const mapState = (state) => ({
  inputChangeLoginData: state.user.inputChangeLoginData,
  isLoading: state.albumReducer.isLoading,
  successMessage: state.user.successMessage,
  errorMessage: state.user.errorMessage,
  logged: state.user.logged,
  message: state.user.successMessage.message,
  id: state.user.user.userId,
});

const mapDispatch = (dispatch) => ({
  inputChangeLoginData: (changeData) => {
    dispatch(inputChangeLoginData(changeData));
  },
  submitLogin: () => {
    dispatch(submitLogin());
  },
});

export default connect(mapState, mapDispatch)(Signin);
