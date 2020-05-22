import React from "react";
import "./style.css";

export default function index(props) {
  const multi = props.date * 1000;
  const myDate = new Date(multi);
  const releaseDate = myDate.toLocaleString("en-US", {
    year: "numeric",
  });
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
        <button onClick={ props.handleFavoriteGame } id="favoriteBtn" className="uk-button uk-position-center-right">
          🤍 Favorite
        </button>
        <p>
        {genres}
        </p>

        <p id="year">{props.date ? `${releaseDate}` : ""}</p>
      </div>
    </div>
  );
}
