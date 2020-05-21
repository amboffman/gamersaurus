import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import InfoCard from "../../components/InfoCard";
import Carousel from "../../components/Carousel/index";
import GameBanner from "../../components/GameBanner";
import "./style.css";

function GameInfo() {
  const [gameQuery, setgameSearch] = useState([]);
  const [gameResult, setGameResult] = useState([]);
  useEffect(() => {

    const gameSearch = `fields cover.image_id, name, genres.name, first_release_date, summary, age_ratings.*, platforms; 
    search ${gameQuery};`;
    API.fetchGame(gameSearch).then((response) => {
      setGameResult(
        response.data.map((game) => ({
          id: game.gameId,
          name: game.name,
          rating: game.aggregated_rating,
          cover: game.cover.image_id,
          genres: game.genres,
          summary: game.summary,
          platforms: game.platforms
        }))
      );
    });
  }, []);
  return (
    <div className="GameInfo">
      <span id="closeButton">
        <Link to="/">✖</Link>
      </span>
      <div className="">
        <img
          className="uk-align-center"
          id="coverImage"
          src="https://straffordchiropractic.com/wp-content/uploads/2017/04/poster-placeholder-203x300.png"
        />
        <GameBanner />
        <Carousel>
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </Carousel>
      </div>
    </div>
  );
}

export default GameInfo;
