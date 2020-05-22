import React from "react";
import "./style.css";

export default function index(props) {
  let platforms;
  let age_ratings;
  if (props.platforms) {
    platforms = props.platforms.map((p) => {
      return p.abbreviation
    }).join(", ");
  }
  if (props.age_ratings) {
    age_ratings = props.age_ratings.map((ar) => {
      switch(ar.rating){
        case 6:
          return "RP"
          break;
        case 7:
          return "EC"
          break;
        case 8:
          return "E"
          break;
        case 9:
          return "E10"
          break;
        case 10:
          return "T"
          break;
        case 11:
          return "M"
          break;
        case 12:
          return "AO"
          break;
          default: 
          return
      }
      return ar.rating
    });
  }
  
  return (
    <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
      <h3 className="uk-card-title">Summary</h3>
      <p className="overflow-ellipsis summary"> </p>

      <div className="toggle">
        <p>
          {props.summary}
          <span className="toggle readMore" uk-toggle="target: .toggle">
            ...Read More
            </span>
        </p>
      </div>

      <div hidden className="toggle">
        <p>
          Escape to a deserted island and create your own paradise as you
          explore, create, and customize in the Animal Crossing: New Horizons
          game. Your island getaway has a wealth of natural resources that can
          be used to craft everything from tools to creature comforts. You can
          hunt down insects at the crack of dawn, decorate your paradise
          throughout the day, or enjoy sunset on the beach while fishing in
          the ocean. The time of day and season match real life, so each day
          on your island is a chance to check in and find new surprises all
          year round.
          </p>
        <span hidden className="toggle readMore" uk-toggle="target: .toggle">
          Read Less
          </span>
      </div>

      <p className="subCategory">Rated</p>
      <p>{age_ratings}</p>
      <p className="subCategory">Platforms</p>
      <span>{platforms}</span>
    </div>
  );
}
