import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { useAuth } from "../../utils/auth";
import GameResults from "../../components/GameResults";
import GameCard from "../../components/GameCard";
import DeleteButton from "../../components/DeleteButton";
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

  function removeFavorite(event) {
    const userId = user.id;
    const gameId = event.target.getAttribute("data-id");
    API.removeUserFavorite(userId, gameId).then((res) => {
      API.getUser(user.id).then((res) => {
        setFavorites(res.data.favorites);
      });
    });
  }

  return (
    <div className="uk-container container Profile">
      <h1>HELLO {username}</h1>
      <p>HERE ARE YOUR FAVORITES ♡</p>
      <GameResults>
        {favorites.map((game) => (
          <GameCard
            id={game.id}
            key={game.id}
            cover={game.cover}
            name={game.name}
            rating={game.aggregated_rating}
          >
            <DeleteButton id={game.id} onClick={removeFavorite} />
          </GameCard>
        ))}
      </GameResults>
    </div>
  );
}

export default Profile;
