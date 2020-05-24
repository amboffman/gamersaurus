import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import API from "../../utils/API";
import { useAuth } from "../../utils/auth";
import "./style.css";

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { isLoggedIn } = useAuth();

  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.signUpUser(formState.username, formState.email, formState.password)
      .then((res) => {
        // once the user has signed up
        // send them to the login page
        history.replace("/login");
      })
      .catch((err) => {});
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="uk-container uk-align-center">
      <h1>Signup</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="uk-margin">
          <label htmlFor="username">Username:</label>
          <input
            className="uk-input"
            placeholder="Username goes here..."
            name="username"
            type="text"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="uk-margin">
          <label htmlFor="email">Email address:</label>
          <input
            className="uk-input"
            placeholder="Email goes here..."
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="uk-margin">
          <label htmlFor="pwd">Password:</label>
          <input
            className="uk-input"
            placeholder="Password goes here..."
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="uk-button button">
          Submit
        </button>
      </form>

      <p>
        <Link id="link" to="/login">
          Go to Login
        </Link>
      </p>
    </div>
  );
}

export default Signup;
