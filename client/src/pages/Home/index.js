import React, { useEffect, useState } from "react";
import "./home.css";
import API from "../../utils/API";
import Carousel from "../../components/Carousel";
import CarouselCard from "../../components/CarouselCard";
import ComingSoonCarouselCard from "../../components/ComingSoonCarouselCard";
import CarouselCardPlaceholder from "../../components/CarouselCardPlaceholder"
import WelcomeBanner from "../../components/WelcomeBanner";
import CarouselPlaceholder from "../../components/CarouselPlaceholder";

function Home() {

  const [trendingGamesResults, setTrendingGamesResults] = useState([]);
  const [trendingGamesLoading, setTrendingGamesLoading] = useState(true);
  const [comingSoonGamesResults, setComingSoonGamesResults] = useState([]);
  const [comingSoonGamesLoading, setComingSoonGamesLoading] = useState(true);
  const [recentReleaseResults, setRecentReleaseResults] = useState([]);
  const [recentReleaseResultsLoading, setRecentReleaseResultsLoading] = useState(true);

  useEffect(() => {
    API.fetchTrendingGames().then((response) => {
      setTrendingGamesResults(
        response.data.map((game) => ({
          id: game.id,
          name: game.name,
          rating: game.aggregated_rating,
          cover: game.cover.image_id,
        })
        )
      );
    }).then(data => {
      setTimeout(() => setTrendingGamesLoading(false), 1500);
    });


    API.fetchRecentReleases().then((response) => {
      setRecentReleaseResults(
        response.data.map((game) => ({
          id: game.id,
          name: game.name,
          rating: game.aggregated_rating,
          cover: game.cover.image_id,
        })
        )
      );
    }).then(data => {
      setTimeout(() => setRecentReleaseResultsLoading(false), 1500);
    });


    API.fetchComingSoon().then((response) => {
      setComingSoonGamesResults(
        response.data.map((game) => ({
          id: game.id,
          name: game.name,
          rating: game.aggregated_rating,
          date: game.first_release_date,
          cover: game.cover.image_id,
        })

        )
      );
    }).then(data => {
      setTimeout(() => setComingSoonGamesLoading(false), 1500);
    });
  }, []);

  return (
    <div className="App">
      <WelcomeBanner />
      <h1>Trending Games</h1>
      {
        trendingGamesLoading ? <CarouselPlaceholder /> : <Carousel>
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
      }
      <h1>Recent Released Games</h1>
      {
        recentReleaseResultsLoading ? <CarouselPlaceholder /> :
          <Carousel>
            {recentReleaseResults.map((game) => (
              recentReleaseResultsLoading ? <CarouselCardPlaceholder /> : <CarouselCard
                key={game.id}
                id={game.id}
                cover={game.cover}
                name={game.name}
                rating={game.rating}
              />
            ))}
          </Carousel>
      }
      <h1>Coming Soon Games</h1>
      {
        comingSoonGamesLoading ? <CarouselPlaceholder /> :
      <Carousel>
        {comingSoonGamesResults.map((game) => (
          comingSoonGamesLoading ? <CarouselCardPlaceholder /> : <ComingSoonCarouselCard
            key={game.id}
            id={game.id}
            cover={game.cover}
            name={game.name}
            rating={game.rating}
            date={game.date}
          />
        ))}
      </Carousel>
      }
    </div>
  );
}

export default Home;
