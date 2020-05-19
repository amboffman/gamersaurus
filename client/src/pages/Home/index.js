import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "./logo.svg";
import "./home.css";
import { useAuth } from "../../utils/auth";
import API from "../../utils/API";

function Home() {
  const { user, logout } = useAuth();
  const history = useHistory();

  const goToEditProfile = () => history.push("/profile");

  const currentDate = Math.floor(Date.now()/1000);
  
  const [trendingGamesResults, setTrendingGamesResults] = useState([]);
  const [comingSoonGamesResults, setComingSoonGamesResults] = useState([]);
  const [recentReleaseResults, setRecentReleaseResults] = useState([]);

  useEffect(()=>{
    // Top 15 popular games in the past month
    const trendingGameSearch = `fields *; limit 15; where first_release_date < ${currentDate} & first_release_date > ${currentDate - 2592000}; sort popularity desc;`
    API.fetchGames(trendingGameSearch).then((response)=>{setTrendingGamesResults(response)})

    // Top 15 popular games coming soon
    const comingSoonGameSearch = `fields *; limit 15; where first_release_date > ${currentDate}; sort popularity desc;`
    API.fetchGames(comingSoonGameSearch).then((response)=>{setComingSoonGamesResults(response)})

     // Top 15 recently released games
    const recentReleaseSearch = `fields *; limit 15; where first_release_date <= ${currentDate}; sort first_release_date desc;`
    API.fetchGames(recentReleaseSearch).then((response)=>{setRecentReleaseResults(response)})
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome</h2>
      </div>
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
    </div>
  );
}

export default Home;
