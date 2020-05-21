import React from "react";

export default function index(props) {
  const image = `https://images.igdb.com/igdb/image/upload/t_cover_big/${props.cover}.jpg`
  return (
    <li>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          <img
            src= {image}
            alt="placeholder"
          ></img>
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{props.name} {props.rating ? (`Rating: ${props.rating}`) : ("")} </h3>
        </div>
      </div>
    </li>
  );
}
