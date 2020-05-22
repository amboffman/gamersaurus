import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import CarouselCard from "../components/CarouselCard";

function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [favorites, setFavorites] = useState([])
  const { user } = useAuth();

  useEffect(() => {
    API.getUser(user.id).then(res => {
      setUsername(res.data.username);
      setEmail(res.data.email);
      setFavorites(res.data.favorites);
    });
  }, [user]);

  return (
    <div className="container Profile">
      <h1>HELLO {username}</h1>
      <p>HERE ARE YOUR FAVORITES ♡</p>
      {favorites.map((game) => (
        <CarouselCard
          key = {game.id}
          cover={game.cover}
          name={game.name}
          rating={game.aggregated_rating} />
      ))}
      <Link to="/">Go home</Link>
    </div>
  );
}

export default Profile;
