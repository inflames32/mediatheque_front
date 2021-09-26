import { React } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../Footer";
import Header from "../Header";

import { inputChangeLoginData, submitLogin } from "../../store/action";
import { Form, Button, Card } from "react-bootstrap";
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
}) => {
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    inputChangeLoginData({
      [name]: value,
    });
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    console.log("je clique");
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
                <Form.Check type="checkbox" label="Restez connecté ?" />
              </Form.Group>
              {email && password ? (
                <div>
                  <Button
                    type="submit"
                    onClick={onFormSubmit}
                    className="btn--ok"
                  >
                    Connexion
                  </Button>
                </div>
              ) : (
                <div>
                  <Button
                    type="submit"
                    onClick={onFormSubmit}
                    className="btn--disabled"
                    disabled
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
      <ToastContainer />
      {successMessage && toast.success("Vous êtes connecté")}
      <Footer />
    </div>
  );
};

const mapState = (state) => ({
  email: state.user.inputChangeLoginData.email,
  password: state.user.inputChangeLoginData.password,
  inputChangeLoginData: state.user.inputChangeLoginData,
  isLoading: state.albumReducer.isLoading,
  successMessage: state.user.successMessage,
  errorMessage: state.user.errorMessage,
  logged: state.user.logged,
  _id: state.user._id,
});

const mapDispatch = (dispatch) => ({
  inputChangeLoginData: (changeData) => {
    dispatch(inputChangeLoginData(changeData));
  },
  submitLogin: () => {
    console.log("je submit");
    dispatch(submitLogin());
  },
});

export default connect(mapState, mapDispatch)(Signin);
