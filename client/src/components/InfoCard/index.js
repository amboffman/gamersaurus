import React from "react";
import "./style.css";

export default function index(props) {
  return (
    <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
      <h3 className="uk-card-title">Summary</h3>
      <p className="overflow-ellipsis summary"> </p>
      <p>
        {props.summary}
        </p>

      {/* <div className="toggle">
        <p>
          {props.splitSummary}
          <span className="toggle readMore" uk-toggle="target: .toggle">
            ...Read More
          </span>
        </p>
      </div>

      <div hidden className="toggle">
        <span hidden className="toggle readMore" uk-toggle="target: .toggle">
          Read Less
        </span>
      </div> */}

      <p className="subCategory">Rated</p>
      <span>E</span>
      <p className="subCategory">Platforms</p>
      <span>{props.platform}🎮</span>
    </div>
  );
}
