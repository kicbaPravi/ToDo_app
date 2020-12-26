import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import {
  closeModal,
  loginAction,
  logoutAction,
  signUpAction,
} from "../store/actions";
import { Redirect } from "react-router-dom";

const LoginModal = ({ loggedIn }) => {
  const dispatch = useDispatch();

  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");

  const credentials = {
    email,
    password,
  };

  if (loggedIn) {
    return <Redirect to="/Admin" />;
  }

  return (
    <div className="bg-modal">
      <div className="modal-content">
        <div className="close" onClick={() => dispatch(closeModal())}></div>
        <h1>Login Page</h1>
        <div className="container_login">
          <label htmlFor="name">Email</label>
          <input
            type="text"
            placeholder="Email adress"
            onChange={(e) => updateEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => updatePassword(e.target.value)}
            required
          />

          <button onClick={() => dispatch(loginAction(credentials))}>
            Login
          </button>

          <button onClick={() => dispatch(signUpAction(credentials))}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.main.loggedIn,
  };
};

export default connect(mapStateToProps, {
  closeModal,
  loginAction,
  logoutAction,
  signUpAction,
})(LoginModal);
