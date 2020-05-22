import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { useAuth } from "../../utils/auth";
import FavoritesCard from "../../components/FavoritesCard";
import GameResults from "../../components/GameResults";
import "./style.css";

function Profile() {
  const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  const [favorites, setFavorites] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    API.getUser(user.id).then((res) => {
      setUsername(res.data.username);
      // setEmail(res.data.email);
      setFavorites(res.data.favorites);
    });
  }, [user]);

  return (
    <div className="uk-container container Profile">
      <h1>HELLO {username}</h1>
      <p>HERE ARE YOUR FAVORITES ♡</p>
      <GameResults>
        {favorites.map((game) => (
          <FavoritesCard
            id={game.id}
            key={game.id}
            cover={game.cover}
            name={game.name}
            rating={game.aggregated_rating}
          />
        ))}
      </GameResults>
    </div>
  );
}

export default Profile;
