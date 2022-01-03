import { React } from "react";
import { connect } from "react-redux";

import Footer from "../Footer";
import Header from "../Header";

import {
  inputChangeCreateAccount,
  submitCreateAccount,
  successCreateAccount,
  errorCreateAccount,
} from "../../store/action";

const SignUp = ({
  errorMessage,
  successMessage,
  inputChangeCreateAccount,
  submitCreateAccount,
  isLoading,
  email,
  password_validation,
  password,
  successCreateAccount,
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
      <div className="flex flex-col w-full h-screen items-center justify-center">
        <div className=" flex flex-col w-5/6 justify-center items-center border-none">
          <form className="flex flex-col w-4/5">
            <div className="mb-3" controlId="formBasicEmail">
              <label>Adresse e-mail</label>
              <input
                className="flex flex-col w-4/5"
                type="email"
                name="email"
                placeholder="Entrez votre email"
                onChange={handleInputChange}
                value={inputChangeCreateAccount.email}
              />
              {/* <div className="text-muted">
                Votre email sera utilisé que pour vous connecter à votre compte.
              </div> */}
            </div>
            <div className="mb-3" controlId="formBasicPassword">
              <label>Mot de passe</label>
              <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                onChange={handleInputChange}
                className="flex flex-col w-4/5"
                value={inputChangeCreateAccount.password}
              />
            </div>
            <div className="mb-3" controlId="formBasicPasswordValidation">
              <label>Retaper votre mot de passe</label>
              <input
                type="password"
                name="password_validation"
                placeholder="Retaper votre mot de passe"
                onChange={handleInputChange}
                className="flex flex-col w-4/5"
                value={inputChangeCreateAccount.password_validation}
              />
            </div>
            <div className="flex justify-center">
              {!isLoading ? (
                <button
                  className="no_account not_allowed"
                  variant="primary"
                  type="submit"
                  onClick={onFormSubmit}
                >
                  Créer
                </button>
              ) : (
                <button
                  className="no_account not_allowed"
                  variant="primary"
                  type="submit"
                  onClick={onFormSubmit}
                >
                  <div animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </button>
              )}
            </div>
          </form>
          {errorMessage && <div>{errorMessage}</div>}
          {successMessage && <div>{successMessage}</div>}
        </div>
      </div>

      <Footer />
    </div>
  );
};
const mapState = (state) => ({
  isloading: state.user.isLoading,
  inputChangeCreateAccount: state.user.inputChangeCreateAccount,
  errorMessage: state.user.errorMessage,
  successMessage: state.user.successMessage,
  isLoading: state.user.isLoading,
  email: state.user.inputChangeCreateAccount.email,
  password: state.user.inputChangeCreateAccount.password,
  password_validation: state.user.inputChangeCreateAccount.password_validation,
});

const mapDispatch = (dispatch) => ({
  inputChangeCreateAccount: (changeData) => {
    dispatch(inputChangeCreateAccount(changeData));
  },
  submitCreateAccount: () => {
    dispatch(submitCreateAccount());
  },
});

export default connect(mapState, mapDispatch)(SignUp);
