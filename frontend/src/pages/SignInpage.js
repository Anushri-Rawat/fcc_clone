import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { login, register } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const SignInpage = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(UserContext);
  const navigate = useNavigate();
  const [isRegister, SetIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (isRegister) register({ name, email, password }, dispatch);
    else login({ email, password }, dispatch);
    navigate("/learn");
  };

  const googleSuccess = (res) => {
    const decodedUser = jwt_decode(res.credential);
    try {
      dispatch({
        type: "SET_USER",
        payload: { ...decodedUser, token: res.credential },
      });
      localStorage.setItem(
        "fccUser",
        JSON.stringify({ ...decodedUser, token: res.credential })
      );
      navigate("/learn");
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = (error) =>
    console.log("Google Sign In was unsuccessful. Try again later");

  return (
    <div
      style={{ display: "block", background: "rgba(0,0,0,0.3)", zIndex: "-1" }}
      className="modal"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="signinModalLabel">
              {isRegister ? "Register" : "Login"} to freecodecamp
            </h1>
          </div>
          <div className="modal-body">
            <GoogleOAuthProvider
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              onScriptLoadError={googleSuccess}
              onScriptLoadSuccess={googleError}
            >
              <GoogleLogin
                render={(renderProps) => (
                  <button
                    color="primary"
                    fullWidth
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    variant="contained"
                  >
                    Google Login
                  </button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleError}
              />
            </GoogleOAuthProvider>
            <div className="separator">
              <span>or</span>
            </div>
            <form onSubmit={formSubmitHandler}>
              {isRegister && (
                <input
                  className="form-control"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
              )}
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                className="form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <button type="submit" className="btn w-100">
                {!isRegister ? "Login" : "Register"}
              </button>
            </form>
            {!isRegister ? (
              <p className="text-center">
                Don't have an account yet?
                <span
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => {
                    SetIsRegister(true);
                  }}
                >
                  Register
                </span>
              </p>
            ) : (
              <p className="text-center">
                Already have an account?
                <span
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => {
                    SetIsRegister(false);
                  }}
                >
                  Login
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInpage;
