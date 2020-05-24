import React from "react";
import "./style.css"
import { Link } from "react-router-dom";
export default function index(props) {
  const image = `https://images.igdb.com/igdb/image/upload/t_cover_big/${props.cover}.jpg`;
  const multi = props.date * 1000;
  const myDate = new Date(multi);
  const releaseDate = myDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const newRating = props.rating ? (props.rating.toFixed(0)) : "";
  let ratingElement;

  switch(newRating) {
    case "":
      ratingElement = <span className="ratingComingSoon">NR</span>;
      break;
    case (props.rating.toFixed(0)):
      ratingElement = <p className="ratingComingSoon">{newRating}</p>
      break;
    default:
      break;
  }

  return (
    <li>
      <Link to={"/" + props.id}>
      <div className="card uk-card uk-card-default">
        <div className="uk-card-media-top">
          <img src={image} alt={props.name}></img>
          {ratingElement}
        </div>
        <div className="comingSoonCardBody uk-card-body">
          <span className="uk-card-title">{props.name} </span>
          <p >{props.date ? `${releaseDate}` : ""}</p>
        </div>
      </div>
      </Link>
    </li>
  );
}
