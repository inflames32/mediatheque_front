import { React, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../Footer";
import Header from "../Header";

import { inputChangeLoginData, submitLogin } from "../../store/action";
import { Form, Button, Card, Spinner } from "react-bootstrap";
import "../../Styles/signin.scss";
import "react-toastify/dist/ReactToastify.css";

const Signin = ({
  inputChangeLoginData,
  logged,
  successMessage,
  errorMessage,
  message,
  id,
  email,
  password,
  submitLogin,
  isLoading,
  loggedUser,
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

  return (
    <div className="signin">
      <Header />
      <main className="signin-main">
        <Card className="signin-card ">
          {!logged ? (
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
                  autoComplete="current-email"
                />
                <Form.Text className="text-muted">
                  Votre email sera utilisé que pour vous connecter à votre
                  compte.
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
                  autoComplete="current-password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                {/*  <Form.Check type="checkbox" label="Restez connecté ?" /> */}
              </Form.Group>
              {isLoading ? (
                <div>
                  <Button
                    className="no_account not_allowed"
                    variant="primary"
                    type="submit"
                    onClick={onFormSubmit}
                  >
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </Button>
                </div>
              ) : (
                <div>
                  <Button
                    type="submit"
                    onClick={onFormSubmit}
                    className="btn--disabled"
                  >
                    Connexion
                  </Button>
                </div>
              )}
              <Link to="/signup">
                <div className="no_account">Vous n'avez pas de compte ?</div>
              </Link>
            </Form>
          ) : (
            <div>
              <Redirect to="/">Retour à l'accueil</Redirect>
            </div>
          )}
          {logged && (
            <div>
              <p>{message}</p>
              <p>{id}</p>
            </div>
          )}
        </Card>
      </main>
      <Footer />
    </div>
  );
};

const mapState = (state) => ({
  email: state.user.inputChangeLoginData.email,
  password: state.user.inputChangeLoginData.password,
  inputChangeLoginData: state.user.inputChangeLoginData,
  isLoading: state.user.isLoading,
  successMessage: state.user.successMessage,
  errorMessage: state.user.errorMessage,
  logged: state.user.logged,
  _id: state.user._id,
  loggedUser: state.user.loggedUser,
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
