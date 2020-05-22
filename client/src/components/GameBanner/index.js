import React from "react";
import "./style.css";
// G
// Array(2)
// 0: {id: 10, name: "Racing"}
// 1: {id: 13, name: "Simulator"}
// length: 2
// __proto__: Array(0)

export default function index(props) {
  console.log("G", props.genres);
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
          98
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
