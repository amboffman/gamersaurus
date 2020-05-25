import React from "react";
import "./style.css";

export default function index(props) {
  let platforms;
  let age_ratings;
  if (props.platforms) {
    platforms = props.platforms
      .map((p) => {
        return p.abbreviation;
      })
      .join(", ");
  }
  if (props.age_ratings) {
    age_ratings = props.age_ratings.map((ar) => {
      switch (ar.rating) {
        case 6:
          return "RP";
          break;
        case 7:
          return "EC";
          break;
        case 8:
          return "E";
          break;
        case 9:
          return "E10";
          break;
        case 10:
          return "T";
          break;
        case 11:
          return "M";
          break;
        case 12:
          return "AO";
          break;
        default:
          return;
      }
      return ar.rating;
    });
  }

  return (
    <div className="uk-card uk-card-default uk-card-body uk-width-1-1 summary-card">
      <h3 className="uk-card-title">Summary</h3>
      <p className="overflow-ellipsis summary"> </p>
      <p>{props.summary}</p>
      <br />

      <p className="subCategory">Rated</p>
      <p>{age_ratings}</p>
      <br />

      <p className="subCategory">Platforms</p>
      <p>{platforms}</p>
    </div>
  );
}
