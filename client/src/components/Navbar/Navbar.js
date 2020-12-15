import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import logo from "../../images/logo.png";
import "./style.css";

const createLink = ({ text, to, ...rest }) => {
  const className = "nav-link";
  if (to) {
    return (
      <NavLink className={className} to={to} {...rest} activeStyle={{ fontWeight: 'bold', color: 'purple' }}>
        {text}
      </NavLink>
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
  const url = useLocation()
  const [active, setActive] = useState(false)
  useEffect(() => {
    if (url.pathname === "/signup" || url.pathname === "/login" || url.pathname === "/profile") {
      setActive(true)
    }
    else {
      setActive(false)
    }
  }, [url])
  return (
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #sticky-dropdown">
      <nav className="uk-navbar uk-navbar-container uk-box-shadow-large" uk-navbar="mode: click">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link className="navbar-brand dino" to="/">
                <img src={logo} className="logo" alt="8-bit dino logo"></img>
              </Link>
            </li>
            <li>
              <p className="brandName">GAMERSAURUS</p>
            </li>
          </ul>
        </div>
        {/* <div className="uk-navbar-center">
          <ul className="uk-navbar-nav">
            <li>
              <Link className="navbar-search" to="/search">
                <span uk-icon="search"></span>
              </Link>
            </li>
          </ul>
        </div> */}

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <NavLink className="navbar-search" to="/search" activeStyle={{ fontWeight: 'bold', color: 'purple' }}>
                <span uk-icon="search"></span>
              </NavLink>
            </li>
            <li className="uk-parent">
              <NavLink className="navbar-brand" to="/profile" activeStyle={{ fontWeight: 'bold', color: 'purple' }}>
                <span uk-icon="user" style={active ? { fontWeight: "bold", color: "purple" } : null}></span>
              </NavLink>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <NavLinks activeStyle={{ fontWeight: "bold", color: "purple" }} />
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