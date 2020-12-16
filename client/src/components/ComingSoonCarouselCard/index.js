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
  let title;
  if(props.name.length >35){
    title=props.name.substring(0,35) + '...'
  }
  else{
    title = props.name
  }

  return (
    <li>
      <Link to={"/" + props.id}>
      <div className="card uk-card uk-card-default uk-box-shadow-hover-xlarge">
        <div className="coverImageContainer uk-card-media-top">
          <img className="coverImage uk-position-top-center" src={image} alt={props.name}></img>
          {ratingElement}
        </div>
        <div className="comingSoonCardBody uk-card-body">
          <span className="uk-card-title">{title}</span>
          <p >{props.date ? `${releaseDate}` : ""}</p>
        </div>
      </div>
      </Link>
    </li>
  );
}
