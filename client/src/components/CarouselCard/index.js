import React from "react";
import "./style.css"
import { Link } from "react-router-dom";
export default function index(props) {
  const image = `https://images.igdb.com/igdb/image/upload/t_cover_big/${props.cover}.jpg`;
  const multi = props.date * 1000;
  const myDate = new Date(multi);
  const releaseDate = myDate.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const newRating = props.rating ? (props.rating.toFixed(0)) : "";
  let ratingElement;

  switch(newRating) {
    case "":
      ratingElement = "";
      break;
    case (props.rating.toFixed(0)):
      ratingElement = <p className="rating uk-position-small uk-position-bottom-right">{newRating}</p>
      break;
    default:
      break;
  }

  return (
    <li>
      <Link to={"/" + props.id}>
      <div className="card uk-card uk-card-default">
        <div className="cardImage  uk-card-media-top">
          <img  src={image} alt={props.name}/>
          {ratingElement}
        </div>
        <div className="cardBody uk-card-body">
          <p className="uk-card-title">{props.name} </p>
          <p>{props.date ? `Release Date: ${releaseDate}` : ""}</p>
        </div>
      </div>
      </Link>
    </li>
  );
}
