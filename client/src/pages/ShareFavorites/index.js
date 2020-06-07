import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel"
import GameResults from "../../components/GameResults";
import GameCard from "../../components/GameCard";
import "./style.css";

function ShareFavorites() {
  const [favorites, setFavorites] = useState([]);
  const { userName } = useParams();

  useEffect(() => {
    API.shareUserFavorites(userName).then((res) => {
      setFavorites(res.data);
    });
  }, []);

  return (
    <div>
      <h3 className="uk-padding-small">
        {favorites.length > 0
          ? `${userName}'s Favorites`
          : `${userName} favorites list is empty`}
      </h3>
      <Carousel>
        {favorites.map((game) => (
          <GameCard
            id={game.id}
            key={game.id}
            cover={game.cover}
            name={game.name}
            rating={game.aggregated_rating}
          ></GameCard>
        ))}
      </Carousel>
    </div>
  );
}

export default ShareFavorites;
