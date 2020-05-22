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
  const {id} = useParams();
  useEffect(() => {
    API.fetchGame(id).then((response) => {
      console.log(response.data)
      setGame(
        // {
      //     id: game.gameId,
      //     name: game.name,
      //     rating: game.aggregated_rating,
      //     date:game.first_release_date,
      //     cover: game.cover,
      //     genres: game.genres,
      //     summary: game.summary,
      //     platforms: game.platforms
      //   }
      response.data[0]
      );
    });
  }, []);
  console.log("New Game", game);
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
        <GameBanner name={game.name} rating={game.rating} genres={game.genres}/>
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
