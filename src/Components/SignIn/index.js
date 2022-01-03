import { React, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../Footer";
import Header from "../Header";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { inputChangeLoginData, submitLogin } from "../../store/action";

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
  const [passwordReveal, setPasswordReveal] = useState(false);
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

  const handlePasswordReveal = () => {
    setPasswordReveal(!passwordReveal);
  };

  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-col w-full h-full pt-16 items-center justify-center">
        <div className=" flex w-4/5 justify-center items-center ">
          {!logged ? (
            <form className="w-4/5">
              <div className="flex flex-col" controlId="formBasicEmail">
                <label for="email">Adresse e-mail</label>
                <input
                  type="email"
                  name="email"
                  value={inputChangeLoginData.email}
                  placeholder="Entrez votre email"
                  onChange={handleInputChange}
                  autoComplete="current-email"
                  className="bg-slate-400"
                />
                <div className="text-muted"></div>
              </div>

              <div className="mt-2 mb-2" controlId="formBasicPassword">
                <form className="">
                  {passwordReveal ? (
                    <div className="flex flex-col">
                      <label for="password">Mot de passe</label>
                      <input
                        type="text"
                        name="password"
                        value={inputChangeLoginData.password}
                        placeholder="Mot de passe"
                        onChange={handleInputChange}
                        autoComplete="current-password"
                        className="bg-slate-400"
                      />
                      <div className="signin-card-form-password-eye">
                        <FiEye onClick={handlePasswordReveal} />
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <label for="password">Mot de passe</label>
                      <input
                        type="password"
                        name="password"
                        value={inputChangeLoginData.password}
                        placeholder="Mot de passe"
                        onChange={handleInputChange}
                        autoComplete="current-password"
                      />
                      <div className="signin-card-form-password-eye">
                        <FiEyeOff onClick={handlePasswordReveal} />
                      </div>
                    </div>
                  )}
                </form>
              </div>

              {isLoading ? (
                <div>
                  <button
                    className="bg-green-400"
                    variant="primary"
                    type="submit"
                    onClick={onFormSubmit}
                  >
                    <div animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    type="submit"
                    onClick={onFormSubmit}
                    className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300 no-underline"
                  >
                    Connexion
                  </button>
                </div>
              )}
              <Link to="/signup">
                <div className="no_account">Vous n'avez pas de compte ?</div>
              </Link>
            </form>
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
        </div>
      </div>
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
