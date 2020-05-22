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
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #sticky-dropdown">
      <nav className="uk-navbar uk-navbar-container" uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link className="navbar-brand" to="/">
                <img src={logo} className="logo" alt="8-bit dino logo"></img>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-center">
          <ul className="uk-navbar-nav">
            <li>
              <Link className="navbar-search" to="/search">
                <span uk-icon="search"></span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <Link className="navbar-brand" to="/profile">
                <span uk-icon="user"></span>
              </Link>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li className="uk-active"><a href="#">Active</a></li>
                  <li><a href="#">Item</a></li>
                  <li><a href="#">Item</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;