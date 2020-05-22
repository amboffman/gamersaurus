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

  const image = `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover}.jpg`;

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
        <GameBanner 
        name={game.name} 
        rating={game.aggregated_rating} 
        genres={game.genres} 
        date={game.first_release_date}/>
        <Carousel>
          <InfoCard 
          summary={game.summary}
          platforms={game.platforms}
          />
          <InfoCard />
          <InfoCard />
        </Carousel>
      </div>
    </div>
  );
}

export default GameInfo;
