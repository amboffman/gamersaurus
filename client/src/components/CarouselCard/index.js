import React from "react";

export default function index(props) {
  return (
    <li>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          <img
            src="https://straffordchiropractic.com/wp-content/uploads/2017/04/poster-placeholder-203x300.png"
            alt="placeholder"
          ></img>
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{props.name} Rating: {props.rating} </h3>
        </div>
      </div>
    </li>
  );
}
