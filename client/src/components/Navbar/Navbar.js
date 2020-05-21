import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import logo from "../../images/logo.png";
import "./style.css";

const createLink = ({ text, to, ...rest }) => {
  const className = "nav-link";
  if (to) {
    return (
      <Link className={className} to={to} {...rest}>
        {text}
      </Link>
    );
  }
  return (
    <span
      role="button"
      className={className}
      style={{ cursor: "pointer" }}
      {...rest}
    >
      {text}
    </span>
  );
};

function NavLinks() {
  const { isLoggedIn, logout } = useAuth();
  const links = [];
  if (isLoggedIn) {
    links.push({ text: "Profile", to: "/profile" });
    links.push({ text: "Logout", onClick: () => logout() });
  } else {
    links.push({ text: "Signup", to: "/signup" });
    links.push({ text: "Login", to: "/login" });
  }
  return (
    <ul className="uk-nav uk-navbar-dropdown-nav">
      {links.map((link, i) => (
        <li key={i} className="nav-item">
          {createLink(link)}
        </li>
      ))}
    </ul>
  );
}

function Navbar() {
  return (
    <nav className="uk-navbar-container" uk-navbar>
      <div className="container">
        <Link className="navbar-brand" to="/">
        <img src= {logo} className= "logo"></img>
        </Link>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <Link className="navbar-brand" to="/profile">
                <span uk-icon="user"></span>
              </Link>
              <div className="uk-navbar-dropdown">
                <NavLinks />
              </div>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;


{/* <nav class="uk-navbar-container" uk-navbar>

  <div class="uk-navbar-center">

    <ul class="uk-navbar-nav">
      <li class="uk-active"><a href="#">Active</a></li>
      <li>
        <a href="#">Parent</a>
        <div class="uk-navbar-dropdown">
          <ul class="uk-nav uk-navbar-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
          </ul>
        </div>
      </li>
      <li><a href="#">Item</a></li>
    </ul>

  </div>


</nav> */}