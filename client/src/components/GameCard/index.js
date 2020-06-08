import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function gameCard(props) {
  const image = props.cover
    ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${props.cover}.jpg`
    : "";
  const newRating = props.rating ? props.rating.toFixed(0) : "NA";
  return (
    <li>
      <div className="card uk-card uk-card-default uk-box-shadow-hover-xlarge">
        <div className="coverImageContainer uk-card-media-top">
          <Link to={"/" + props.id}>
            <img
              className="coverImage uk-position-top-center"
              src={image}
              alt={props.name}
            ></img>
            <span className="rating">{newRating}</span>
          </Link>
        </div>
        <div className="cardBody uk-card-body">
          <p className="cardTitle">{props.name} </p>
          {props.children}
        </div>
      </div>
    </li>
  );
}
