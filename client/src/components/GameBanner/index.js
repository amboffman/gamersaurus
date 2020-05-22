import React from "react";
import "./style.css";

export default function index(props) {
  let genres;
  if (props.genres) {
    genres = props.genres.map((g) => {
      return g.name
    }).join(", ");
  }
  return (
    <div id="container">
      <div id="card" className="uk-card uk-card-body uk-width-1-1">
        <span id="rating" className="uk-card-title">
          {props.rating ? ("Rating: " + props.rating.toFixed(0)) : ""}
        </span>
        <span id="title" className="uk-card-title">
          {props.name}
        </span>
        <p>
        {genres}
        </p>
        <button id="favoriteBtn" className="uk-button">
          🤍 Favorite
        </button>
        <p id="year">2020</p>
      </div>
    </div>
  );
}
