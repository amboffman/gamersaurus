import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "./logo.svg";
import "./home.css";
import { useAuth } from "../../utils/auth";
import API from "../../utils/API";
import Carousel from "../../components/Carousel";
import CarouselCard from "../../components/CarouselCard"


function Home() {
  const { user, logout } = useAuth();
  const history = useHistory();

  const goToEditProfile = () => history.push("/profile");

  const currentDate = Math.floor(Date.now() / 1000);

  const [trendingGamesResults, setTrendingGamesResults] = useState([]);
  
  const [comingSoonGamesResults, setComingSoonGamesResults] = useState([]);
  const [recentReleaseResults, setRecentReleaseResults] = useState([]);

  useEffect(() => {
    // Top 15 popular games in the past month
    const trendingGameSearch = `fields name, cover.image_id, aggregated_rating; where first_release_date < ${currentDate} & first_release_date > ${currentDate - 2592000} & themes != (42) & category != 0; sort popularity asc; limit 5;`
    API.fetchGames(trendingGameSearch)
    .then((response) => { setTrendingGamesResults(response.data.map(game=>({
      id: game.gameId,
      name: game.name,
      rating: game.aggregated_rating,
      cover: game.cover
    }))) })

    // Top 15 popular games coming soon
    const comingSoonGameSearch = `fields name, aggregated_rating, cover.image_id; limit 15; where first_release_date > ${currentDate}; where themes != (42) & category != 0; sort popularity asc;`
    API.fetchGames(comingSoonGameSearch).then((response) => { setComingSoonGamesResults(response.data.map(game=>({
      id: game.gameId,
      name: game.name,
      rating: game.aggregated_rating,
      cover: game.cover

    }))) })

    // Top 15 recently released games
    const recentReleaseSearch = `fields name, aggregated_rating, cover.image_id; limit 15; where first_release_date <= ${currentDate}; where themes != (42) & category != 0; sort first_release_date asc;`
    API.fetchGames(recentReleaseSearch).then((response) => { setRecentReleaseResults(response.data.map(game=>({
      id: game.gameId,
      name: game.name,
      rating: game.aggregated_rating,
      cover: game.cover

    }))) })
  }, []);

  console.log(trendingGamesResults)
  return (
    <div className="App">
      <p className="App-intro">
        <button
          type="button"
          className="btn btn-primary"
          onClick={goToEditProfile}
        >
          Go to Profile
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => logout()}
        >
          Logout
        </button>
      </p>
      <h1>Trending</h1>
      <Carousel>
        {trendingGamesResults.map((game) => (
          <CarouselCard key = {game.id} cover = {game.cover} name = {game.name} rating = {game.rating} />
        ))}
      </Carousel>
      <h1>Recent Releases</h1>
      <Carousel>
      {recentReleaseResults.map((game) => (
          <CarouselCard key = {game.id} cover = {game.cover} name = {game.name} rating = {game.rating} />
        ))}
      </Carousel>
      <h1>Coming Soon</h1>
      <Carousel>
      {comingSoonGamesResults.map((game) => (
          <CarouselCard key = {game.id} cover = {game.cover} name = {game.name} rating = {game.rating} />
        ))}
      </Carousel>
    </div>
  );
}

export default Home;
