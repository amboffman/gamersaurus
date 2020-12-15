import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import API from "../../utils/API";
import { useAuth } from "../../utils/auth";
import { Alert } from "reactstrap";
import "./style.css";

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState(false);
  const onDismiss = () => setAlert(false)
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
      .catch((err) => {
        setAlert(true);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <div className="uk-container uk-align-center form-container">
        <Alert color="info" className="mt-3 text-center" isOpen={alert} toggle={onDismiss}>Something went wrong creating your account</Alert>
        <h1 className="header">Sign Up</h1>

        <form onSubmit={handleFormSubmit}>
          <div className="uk-margin">
            <input
              className="uk-input form-input"
              placeholder="USERNAME"
              name="username"
              type="text"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div className="uk-margin">
            <input
              className="uk-input form-input"
              placeholder="EMAIL"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="uk-margin">
            <input
              className="uk-input form-input"
              placeholder="PASSWORD"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="uk-button btn">
            Submit
        </button>
        </form>

        <p>
          <Link id="link" to="/login">
            Go to Login
        </Link>
        </p>
      </div>
    </>
  );
}

export default Signup;
