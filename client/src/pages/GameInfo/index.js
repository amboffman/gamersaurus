import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import InfoCard from "../../components/InfoCard";
import Carousel from "../../components/Carousel/index";
import GameBanner from "../../components/GameBanner";
import "./style.css";

function GameInfo() {
  const [game, setGame] = useState({});
  const [favorited, setFavorited] = useState(false);
  const { id } = useParams();
  const { user } = useAuth();
  let button;

  console.log(favorited);

  useEffect(() => {
    API.fetchGame(id).then((response) => {
      setGame(response.data[0]);
    });
  }, []);

  function addFavorite() {
    if (user) {
      API.addUserFavorite(
        user.id,
        game.gameId,
        game.name,
        game.cover,
        game.aggregated_rating
      ).then((response) => {});
    }
  }

  function handleButton(event) {
    if (user) {
      if (favorited) {
      } else {
      }
      event.preventDefault();
      setFavorited(true);
    } else {
      alert("You need to be logged in to favorite a game.");
    }
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
          name={game.name}
          rating={game.aggregated_rating}
          genres={game.genres}
          date={game.first_release_date}
          button={button}
        />
        <Carousel>
          <InfoCard summary={game.summary} platform={game.platform} />
          <InfoCard />
          <InfoCard />
        </Carousel>
      </div>
    </div>
  );
}

export default GameInfo;
