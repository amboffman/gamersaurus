import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import InfoCard from "../../components/InfoCard";
import GameBanner from "../../components/GameBanner";
import MediaContainer from "../../components/MediaContainer";
import VideoTrailer from "../../components/VideoTrailer";
import Modal from "../../components/Modal";
import "./style.css";
import SimilarResults from "../../components/SimilarResults";

function GameInfo() {
  const [game, setGame] = useState({});
  const [favorited, setFavorited] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const { id } = useParams();
  const { user } = useAuth();
  let favButton;

  useEffect(() => {
    API.searchGame(id).then((response) => {
      setGame(response.data[0]);
    });
  }, []);

  if (user) {
    API.getUser(user.id).then((res) => {
      const favorites = res.data.favorites;
      for (let i = 0; i < favorites.length; i += 1) {
        if (favorites[i].id === game.id) {
          setFavorited(true);
        }
      }
    });
  }

  function addFavorite(event) {
    event.preventDefault();
    if (user) {
      setFavorited(true);
      API.addUserFavorite(
        user.id,
        game.id,
        game.name,
        game.cover,
        game.aggregated_rating
      ).then(() => {});
    } else {
      setModal(true);
    }
  }

  if (favorited === true) {
    favButton = (
      <button id="favoritedBtn" className="uk-button">
        Favorited
      </button>
    );
  } else {
    favButton = (
      <button
        onClick={addFavorite}
        id="favoriteBtn"
        className="uk-button "
      >
        <span uk-icon="heart"></span> Favorite
      </button>
    );
  }

  const image = `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover}.jpg`;
  return (
    <div className="GameInfo">
      <div className="uk-container">
        <img className="uk-align-center" id="coverImage" src={image} />
        <GameBanner
          button={favButton}
          name={game.name}
          rating={game.aggregated_rating}
          genres={game.genres}
          date={game.first_release_date}
        />
        <div className="uk-container uk-align-center">
          <ul className="uk-tab" data-uk-tab="{connect: '#tabs'}">
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">MEDIA</a>
            </li>
            <li>
              <a href="#">TRAILER</a>
            </li>
          </ul>

          <ul id="tabs" className="uk-switcher uk-margin uk-slideshow">
            <li>
              <InfoCard
                summary={game.summary}
                platforms={game.platforms}
                age_ratings={game.age_ratings}
                />
                <SimilarResults similar_games={game.similar_games}/>
            </li>

            <li>
              <MediaContainer screenshots={game.screenshots} name={game.name} />
            </li>
            <li>
              <VideoTrailer />
            </li>
          </ul>
        </div>
        <Modal
          toggle={toggle}
          modal={modal}
          buttonLabel={"toggle"}
          className={"favAlert"}
        />
      </div>
    </div>
  );
}

export default GameInfo;
