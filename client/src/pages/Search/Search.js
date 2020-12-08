import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import GameResults from "../../components/GameResults";
import GameCard from "../../components/GameCard";
import SimilarResults from "../../components/SimilarResults";
import "./style.css";


function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleFormSubmit(event) {
    event.preventDefault()
    API.searchGames(searchQuery).then((response) => { setSearchResults(response.data.map(game=>({
      id: game.id,
      name: game.name,
      rating: game.aggregated_rating,
      cover: game.cover.image_id,
    })))})
  }

  return (
    <div className="uk-margin .uk-align-center App">
      <h1 className="App.header App.intro">Search</h1>
      <form className="uk-search uk-search-default"         onSubmit={handleFormSubmit}>
        <span uk-search-icon></span>
        <input
          className="uk-search-input"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button
type="submit" className="uk-button button">Find Games</button>
      </form>
        <h2>{searchResults.length > 0 ? "SEARCH RESULTS" : ""}</h2>
      <GameResults>
        {searchResults.map((game) => (
          <GameCard key = {game.id} cover = {game.cover} name = {game.name} rating = {game.rating} id = {game.id}/> 
        ))}
      </GameResults>
    </div>
  );
}

export default Search;
