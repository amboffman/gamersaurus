import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./home.css";
import { useAuth } from "../../utils/auth";
import API from "../../utils/API";
import Carousel from "../../components/Carousel";
import CarouselCard from "../../components/CarouselCard";
import ComingSoonCarouselCard from "../../components/ComingSoonCarouselCard";
import WelcomeBanner from "../../components/WelcomeBanner";

function Home() {
  const { user, logout } = useAuth();
  const history = useHistory();

  const goToEditProfile = () => history.push("/profile");

  const [trendingGamesResults, setTrendingGamesResults] = useState([]);
  const [comingSoonGamesResults, setComingSoonGamesResults] = useState([]);
  const [recentReleaseResults, setRecentReleaseResults] = useState([]);

  useEffect(() => {
    API.fetchTrendingGames().then((response) => {
      setTrendingGamesResults(
        response.data.map((game) => ({
          id: game.id,
          name: game.name,
          rating: game.aggregated_rating,
          cover: game.cover.image_id,
        }))
      );
    });


    API.fetchRecentReleases().then((response) => {
      setRecentReleaseResults(
        response.data.map((game) => ({
          id: game.id,
          name: game.name,
          rating: game.aggregated_rating,
          cover: game.cover.image_id,
        }))
      );
    });


    API.fetchComingSoon().then((response) => {
      setComingSoonGamesResults(
        response.data.map((game) => ({
          id: game.id,
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
      <WelcomeBanner/>
      <h1>Trending Games</h1>
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
            id={game.id}
            cover={game.cover}
            name={game.name}
            rating={game.rating}
          />
        ))}
      </Carousel>
      <h1>Coming Soon Games</h1>
      <Carousel>
        {comingSoonGamesResults.map((game) => (
          <ComingSoonCarouselCard
            key={game.id}
            id={game.id}
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
