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
<<<<<<< HEAD
    const trendingGameSearch = `fields *; limit 15; where first_release_date < ${currentDate} & first_release_date > ${currentDate - 2592000}; where themes != (42) & category != 0; sort popularity desc;`
=======
    const trendingGameSearch = `fields *; limit 15; where themes != (42); sort popularity desc;`
>>>>>>> 882ceac2bc44e636861de98e4cea3e99f3561bdb
    API.fetchGames(trendingGameSearch).then((response)=>{setTrendingGamesResults(response)})

    // Top 15 popular games coming soon
    const comingSoonGameSearch = `fields *; limit 15; where first_release_date > ${currentDate}; where themes != (42) & category != 0; sort popularity desc;`
    API.fetchGames(comingSoonGameSearch).then((response)=>{setComingSoonGamesResults(response)})

     // Top 15 recently released games
    const recentReleaseSearch = `fields *; limit 15; where first_release_date <= ${currentDate}; where themes != (42) & category != 0; sort first_release_date desc;`
    API.fetchGames(recentReleaseSearch).then((response)=>{setRecentReleaseResults(response)})
  }, []);

<<<<<<< HEAD
=======
  console.log(trendingGamesResults);
>>>>>>> 882ceac2bc44e636861de98e4cea3e99f3561bdb

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
