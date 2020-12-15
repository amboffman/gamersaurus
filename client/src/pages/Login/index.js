import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import "./style.css"
import { Alert } from "reactstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useAuth();
  const history = useHistory();
  const [alert, setAlert] = useState(false);
  const onDismiss = () => setAlert(false)

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = event => {
    event.preventDefault();

    login(email, password, setAlert(true))
      // navigate to the profile page
      .then(() => history.push("/profile"))
      .catch(err => {
        console.log(err)
      });
  };

  return (
    <div className="uk-container uk-align-center form-container">
      <Alert color="info" className="mt-3 text-center" isOpen={alert} toggle={onDismiss}>Something went wrong logging into your account</Alert>
      <h1 className="header">Login</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="uk-margin">
          <input
            className="uk-input form-input"
            placeholder="EMAIL"
            name="email"
            type="email"
            id="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className="uk-margin">
          <input
            className="uk-input form-input"
            placeholder="PASSWORD"
            name="password"
            type="password"
            id="pwd"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit" className="uk-button btn">
          Submit
        </button>
      </form>
      <p>
        <Link id="link" to="/signup">Go to Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
