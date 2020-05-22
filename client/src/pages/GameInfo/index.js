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
      setGame(response.data[0]);
    });
  }, []);
  console.log("New Game", game);

  const image = `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover}.jpg`;
  console.log("image",image)
  return (
    <div className="GameInfo">
      <span id="closeButton">
        <Link to="/">✖</Link>
      </span>
      <div className="">
        <img
          className="uk-align-center"
          id="coverImage"
          src={image}
        />
        <GameBanner name={game.name} rating={game.rating} genres={game.genres}/>
        <Carousel>
          <InfoCard summary={game.summary}/>
          <InfoCard />
          <InfoCard />
        </Carousel>
      </div>
    </div>
  );
}

export default GameInfo;
