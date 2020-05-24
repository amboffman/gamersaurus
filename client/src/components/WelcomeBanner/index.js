import React from "react";
import "./style.css";
import logo from "../../images/dino.gif";

function WelcomeBanner() {
  return (
    <div>
      <div className="uk-child-width-expand@s uk-text-center" uk-grid>
        <div>
          <div id= "welcome-banner" className="uk-card uk-card-default uk-card-body">
          <img src={logo} className="gif" alt="8-bit dino logo"></img>
              <span id= "brand-name">Gamersaurus</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;
