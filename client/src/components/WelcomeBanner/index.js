import React from "react";
import "./style.css";
import logo from "../../images/dino.gif";

function WelcomeBanner() {
  return (
    <div>
      <div
        className="uk-child-width-expand@s uk-text-center uk-box-shadow-large"
        uk-grid="true"
      >
        <div>
          <div
            id="welcome-banner"
            className="uk-card uk-card-default uk-card-body"
          >
            <img src={logo} className="gif" alt="8-bit dino logo"></img>
            <h2 className="banner-text">Discover RAWRing New Games</h2>
            <p className="banner-text">based on your favorites</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;
