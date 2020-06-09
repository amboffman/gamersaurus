import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
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
    const shareFavoritesLink = ``;

    API.removeUserFavorite(userId, gameId).then((res) => {
      API.getUser(user.id).then((res) => {
        setFavorites(res.data.favorites);
      });
    });
  }

  return (
    <>
      <div>
        <div
          className="uk-child-width-expand@s uk-text-center uk-box-shadow-large"
          uk-grid
        >
          <div>
            <div
              id="profile-banner"
              className="uk-card uk-card-default uk-card-body"
            >
              <h1 className="user-greet">Hello, {username}!</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-container Profile">
        <h3 className="uk-padding-small">
          {favorites.length > 0
            ? `HERE ARE YOUR FAVORITES ♡`
            : "YOUR FAVORITES ARE EMPTY"}
        </h3>
        <p>
          You can share your favorites list with your friends by sending them
          this link.
        </p>
        {/* <Link to={"/favorites/" + username}>Share Your Favorites List</Link> */}
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
    </>
  );
}

export default Profile;
