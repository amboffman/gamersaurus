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
  const { id } = useParams();
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
          date={game.first_release_date} />
        <div>
          <ul className = "uk-tab" data-uk-tab = "{connect: '#tabs'}">
            <li><a href="#">MEDIA</a></li>
            <li><a href="#">ABOUT</a></li>
          </ul>

          <ul id= "tabs"className="uk-switcher uk-margin">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          </ul>
        </div>

        <InfoCard
          summary={game.summary}
          platform={game.platform}
        />
        <MediaContainer />

      </div>
    </div>
  );
}

export default GameInfo;
