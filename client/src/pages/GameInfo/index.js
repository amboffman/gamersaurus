import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { useParams, useLocation } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import InfoCard from "../../components/InfoCard";
import GameBanner from "../../components/GameBanner";
import MediaContainer from "../../components/MediaContainer";
import Modal from "../../components/Modal";
import "./style.css";
import SimilarResults from "../../components/SimilarResults";
import CarouselPlaceholder from "../../components/CarouselPlaceholder"
import CoverPlaceholder from "../../components/CoverPlaceholder";
import ScreenshotPlaceholder from "../../components/ScreenshotPlaceholder";

function GameInfo() {
  const [game, setGame] = useState({});
  const [gameLoading, setGameLoading] = useState(true);
  const [favorited, setFavorited] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const { id } = useParams();
  const { user } = useAuth();
  let favButton;
  const location = useLocation();
  useEffect(() => {
    API.searchGame(id).then((response) => {
      setGame(response.data[0]);
      window.scrollTo(0, 0);
    }).then(data => {
      setTimeout(() => setGameLoading(false), 1500);
    });
  }, [location, id]);

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
      ).then(() => { });
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
      <button onClick={addFavorite} id="favoriteBtn" className="uk-button ">
        <span uk-icon="heart"></span> Favorite
      </button>
    );
  }

  const image = `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover}.jpg`;
  return (
    <div className="GameInfo">
      <div className="uk-container" id="cover-image">
        {gameLoading ? <CoverPlaceholder className="uk-align-center" style={{ marginTop: 10 }} /> : <img className="uk-align-center uk-img" id="coverImage" src={image} alt={`${game.name} cover`} />}
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
              <a href="/#">ABOUT</a>
            </li>
          </ul>

          <ul id="tabs" className="uk-switcher uk-margin uk-slideshow">
            <li className="uk-active">
              <InfoCard
                summary={game.summary}
                platforms={game.platforms}
                age_ratings={game.age_ratings}
              />
            </li>
          </ul>
          <div id="media" className="uk-card  uk-card-body uk-width-auto">
            <h3 >Screenshots</h3>
            {gameLoading ? <ScreenshotPlaceholder className="uk-width-auto" /> : <MediaContainer screenshots={game.screenshots} name={game.name} />}
          </div>
          <h4 className="uk-padding-large uk-padding-remove-bottom  similar-style">
            Games Similar to {game.name}
          </h4>
          {gameLoading ? <CarouselPlaceholder /> : <SimilarResults similar_games={game.similar_games} />}
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
