import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./home.css";
import { useAuth } from "../../utils/auth";
import API from "../../utils/API";
import Carousel from "../../components/Carousel";
import CarouselCard from "../../components/CarouselCard";

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
    const trendingGameSearch = `fields name, cover.image_id, aggregated_rating, category; limit 10; where first_release_date < ${currentDate} & first_release_date > ${
      currentDate - 7889229
    } & cover != null & themes != (42) & category = 0; sort popularity desc;`;
    API.fetchGames(trendingGameSearch).then((response) => {
      setTrendingGamesResults(
        response.data.map((game) => ({
          id: game.gameId,
          name: game.name,
          rating: game.aggregated_rating,
          cover: game.cover.image_id,
        }))
      );
    });

    // Top 15 recently released games
    const recentReleaseSearch = `fields name, cover.image_id, aggregated_rating; limit 15; where first_release_date <= ${currentDate} & cover != null & themes != (42) & category = 0; sort first_release_date desc;`;
    API.fetchGames(recentReleaseSearch).then((response) => {
      setRecentReleaseResults(
        response.data.map((game) => ({
          id: game.gameId,
          name: game.name,
          rating: game.aggregated_rating,
          cover: game.cover.image_id,
        }))
      );
    });

    // Top 15 popular games coming soon
    const comingSoonGameSearch = `fields name, cover.image_id, first_release_date, aggregated_rating; where first_release_date > ${currentDate} & themes != (42) & category = 0 & first_release_date != null & cover != null; sort first_release_date asc;`;
    API.fetchGames(comingSoonGameSearch).then((response) => {
      setComingSoonGamesResults(
        response.data.map((game) => ({
          id: game.gameId,
          name: game.name,
          rating: game.aggregated_rating,
          date: game.first_release_date,
          cover: game.cover.image_id,
        }))
      );
    });
  }, []);

  return (
    <div className="App">
      <h1>Trending</h1>
      <Carousel>
        {trendingGamesResults.map((game) => (
          <CarouselCard
            key={game.id}
            id={game.id}
            cover={game.cover}
            name={game.name}
            rating={game.rating}
          />
        ))}
      </Carousel>
      <h1>Recent Releases</h1>
      <Carousel>
        {recentReleaseResults.map((game) => (
          <CarouselCard
            key={game.id}
            cover={game.cover}
            name={game.name}
            rating={game.rating}
          />
        ))}
      </Carousel>
      <h1>Coming Soon</h1>
      <Carousel>
        {comingSoonGamesResults.map((game) => (
          <CarouselCard
            key={game.id}
            cover={game.cover}
            name={game.name}
            rating={game.rating}
            date={game.date}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Home;
