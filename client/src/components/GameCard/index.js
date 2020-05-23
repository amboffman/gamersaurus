import React from 'react'
import { Link } from "react-router-dom";
//import "./style.css"

export default function GameCard(props) {
  const image = props.cover ? (`https://images.igdb.com/igdb/image/upload/t_cover_big/${props.cover}.jpg`) : ("");
  const newRating = props.rating ? ("Rating: " + props.rating.toFixed(0)) : "";
  return (
        <Link to={"/" + props.id}>
    <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          <img src={image} alt="placeholder"></img>
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{props.name} </h3>
          <p>{newRating}</p>
        </div>
      </div>
      </Link>
  );
}


