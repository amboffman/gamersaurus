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
  return (
    <li>
      <Link to={"/" + props.id}>
      <div className="card uk-card uk-card-default">
        <div className="uk-card-media-top">
          <img src={image} alt="placeholder"></img>
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{props.name} </h3>
          <p className="rating">{newRating}</p>
          <p>{props.date ? `Release Date: ${releaseDate}` : ""}</p>
        </div>
      </div>
      </Link>
    </li>
  );
}
