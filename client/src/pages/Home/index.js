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

  const [trendingGamesResults, setTrendingGamesResults] = useState([]);
  const [futureGamesResults, setFutureGamesResults] = useState([]);

  const currentDate = Math.floor(Date.now()/1000);
  console.log(`current date: ${currentDate}`);

  useEffect(() => {
    const trendingGameSearch = "fields *; limit 15; sort popularity desc;"
    const futureGameSearch = `fields *; limit 15; where first_release_date > ${currentDate}; sort date asc;`

    API.trendingGames(trendingGameSearch).then((response) => { setTrendingGamesResults(response) });
    API.comingSoonGames(futureGameSearch).then((response) => { setFutureGamesResults(response) });

  }, []);
  console.log(trendingGamesResults);
  console.log(futureGamesResults);

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
