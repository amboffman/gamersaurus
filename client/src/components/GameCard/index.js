import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

export default function gameCard(props) {
  const image = props.cover
    ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${props.cover}.jpg`
    : "";
  const newRating = props.rating ? "Rating: " + props.rating.toFixed(0) : "";
  return (
    <span>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          <Link to={"/" + props.id}>
            <img src={image} alt="placeholder"></img>
          </Link>
        </div>
        <div className="cardBody uk-card-body">
          <h3 className="uk-card-title">{props.name} </h3>
          <p>{newRating}</p>
          {props.children}
        </div>
      </div>
    </span>
  );
}
