import React from "react";
import "./style.css";

export default function index(props) {
  return (
    <div id="container">
      <div id="card" className="uk-card uk-card-body uk-width-1-1">
        <span id="rating" className="uk-card-title">
          98
        </span>
        <span id="title" className="uk-card-title">
          {props.name}
        </span>
        <button id="favoriteBtn" className="uk-button">
          🤍 Favorite
        </button>
        <p id="year">2020</p>
      </div>
    </div>
  );
}
