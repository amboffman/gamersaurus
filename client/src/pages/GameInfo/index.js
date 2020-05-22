import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import InfoCard from "../../components/InfoCard";
import GameBanner from "../../components/GameBanner";
import MediaContainer from "../../components/MediaContainer";
import "./style.css";

function GameInfo() {
  const [game, setGame] = useState({});
  const [favorited, setFavorited] = useState(false);
  const { id } = useParams();
  const { user } = useAuth();
  let button;

  useEffect(() => {
    API.fetchGame(id).then((response) => {
      setGame(response.data[0]);
    });
  }, []);

  function addFavorite(event) {
    event.preventDefault();
    if (user) {
      setFavorited(true);
      API.addUserFavorite(
        user.id,
        game.gameId,
        game.name,
        game.cover,
        game.aggregated_rating
      ).then((response) => {});
    } else {
      alert("You need to be logged in to add this game to your favorites.");
    }
  }

  function removeFavorite(event) {
    event.preventDefault();
    if (user) {
      setFavorited(false);
      API.removeUserFavorite(user.id, game.gameId).then((response) => {});
    } else {
      alert("You need to be logged in to add this game to your favorites.");
    }
  }

  if (favorited === true) {
    button = (
      <button id="favoritedBtn" className="uk-button uk-position-center-right">
        Favorited
      </button>
    );
  } else {
    button = (
      <button
        onClick={addFavorite}
        id="favoriteBtn"
        className="uk-button uk-position-center-right"
      >
        <span uk-icon="heart"></span> Favorite
      </button>
    );
  }

  const image = `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover}.jpg`;
  return (
    <div className="GameInfo">
      <span id="closeButton">
        <Link to="/">✖</Link>
      </span>
      <div className="">
        <img className="uk-align-center" id="coverImage" src={image} />
        <GameBanner
          button={button}
          name={game.name}
          rating={game.aggregated_rating}
          genres={game.genres}
          date={game.first_release_date}
        />
        <InfoCard summary={game.summary} platform={game.platform} />
        <MediaContainer />
      </div>
    </div>
  );
}

export default GameInfo;
