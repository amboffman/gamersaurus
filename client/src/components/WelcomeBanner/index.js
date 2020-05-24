import React from "react";
import "./style.css";

function WelcomeBanner() {
  return (
    <div>
      <div className="uk-child-width-expand@s uk-text-center" uk-grid>
        <div>
          <div id= "welcome-banner" className="uk-card uk-card-default uk-card-body">
              Gamersaurus
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;
