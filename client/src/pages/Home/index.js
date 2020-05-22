import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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
    const trendingGameSearch = `fields *; limit 15; where themes != (42); sort popularity desc;`
    API.fetchGames(trendingGameSearch).then((response) => { setTrendingGamesResults(response.data.map(game=>({
      id: game.gameId,
      name: game.name,
      rating: game.aggregated_rating,
      cover: game.cover

    }))) })

    // Top 15 popular games coming soon
    const comingSoonGameSearch = `fields *; limit 15; where first_release_date > ${currentDate}; where themes != (42) & category != 0; sort popularity desc;`
    API.fetchGames(comingSoonGameSearch).then((response) => { setComingSoonGamesResults(response.data.map(game=>({
      id: game.gameId,
      name: game.name,
      rating: game.aggregated_rating,
      cover: game.cover

    }))) })

    // Top 15 recently released games
    const recentReleaseSearch = `fields *; limit 15; where first_release_date <= ${currentDate}; where themes != (42) & category != 0; sort first_release_date desc;`
    API.fetchGames(recentReleaseSearch).then((response) => { setRecentReleaseResults(response.data.map(game=>({
      id: game.gameId,
      name: game.name,
      rating: game.aggregated_rating,
      cover: game.cover

    }))) })
  }, []);

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
      <Carousel>
        {trendingGamesResults.map((game) => (
          <CarouselCard key = {game.id} cover = {game.cover} name = {game.name} rating = {game.rating} />
        ))}
      </Carousel>
      <Carousel>
      {recentReleaseResults.map((game) => (
          <CarouselCard key = {game.id} cover = {game.cover} name = {game.name} rating = {game.rating} />
        ))}
      </Carousel>
      <Carousel>
      {comingSoonGamesResults.map((game) => (
          <CarouselCard key = {game.id} cover = {game.cover} name = {game.name} rating = {game.rating} />
        ))}
      </Carousel>
    </div>
  );
}

export default Home;
