import { React, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { FiEye, FiEyeOff } from "react-icons/fi";
import validator from "email-validator";

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
    /*  const emailIsValidate = validator.validate(inputChangeLoginData.email);
    console.log(emailIsValidate);
     if (emailIsValidate) {
      
      return;
      /* s
    } else {
      console.log("email non reconnu");
      return;
    } */
  };

  const preventDefault = (evt) => {
    evt.preventDefault();
    console.log("click");
  };

  const handlePasswordReveal = () => {
    setPasswordReveal(!passwordReveal);
  };

  useEffect(() => {
    document.title = "Connexion";
  }, []);

  return (
    <div className="h-screen">
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <div className=" flex w-4/5 items-center justify-center ">
          {!logged ? (
            <form className="w-4/5 p-10 shadow-2xl">
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
                {email && <div>V</div>}
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
                      {password && <div>V</div>}
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
                      {password && <div>V</div>}
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
                    <div
                      animation="border"
                      role="status"
                      className="rounded bg-green-400 py-2 px-2 font-medium text-white  no-underline transition duration-300"
                    >
                      <span>
                        <svg
                          className="... mr-3 h-5 w-5 animate-spin"
                          viewBox="0 0 24 24"
                        ></svg>
                        Chargement...
                      </span>
                    </div>
                  </button>
                </div>
              ) : (
                <div>
                  <div>
                    {!email && password === "" && (
                      <button
                        type="submit"
                        onClick={preventDefault}
                        /*  onClick={onFormSubmit}*/
                        className="rounded bg-red-600 py-2 px-2 font-medium text-white no-underline transition duration-300 hover:bg-red-400"
                      >
                        Email/mot de passe vide(s)
                      </button>
                    )}
                    {email && password && (
                      <button
                        type="submit"
                        onClick={onFormSubmit}
                        className="rounded bg-green-600 py-2 px-2 font-medium text-white no-underline transition duration-300 hover:bg-green-400"
                      >
                        Connexion
                      </button>
                    )}
                  </div>
                  {errorMessage && (
                    <div className="text-red-600">{errorMessage}</div>
                  )}
                  {successMessage && (
                    <div className="text-green-900">{successMessage}</div>
                  )}
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
