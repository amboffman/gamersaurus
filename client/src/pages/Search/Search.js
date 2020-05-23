import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import GameResults from "../../components/GameResults";
import GameCard from "../../components/GameCard";
import "./style.css";


function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [similarResults, setSimilarResults] = useState([]);

  function handleFormSubmit(event) {
    event.preventDefault()
    API.searchGames(searchQuery).then((response) => { console.log(response); setSearchResults(response.data.map(game=>({
      id: game.id,
      name: game.name,
      rating: game.aggregated_rating,
      cover: game.cover.image_id,
      similar: game.similar_games
    })))})
    .then((results)=>{
    API.fetchSimilarGames(results[0].similar)
    .then((sg)=>{
      setSimilarResults(sg.data.map(game=>({
        id: game.id,
        name: game.name,
        rating: game.aggregated_rating,
        cover: game.cover.image_id,
      })))
    })
  })
  }
  console.log(searchResults);
  return (
    <div className="uk-margin .uk-align-center App">
      <h1 className="App.header App.intro">Search</h1>
      <form className="uk-search uk-search-default">
        <span uk-search-icon></span>
        <input
          className="uk-search-input"
          name="search"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button onClick={handleFormSubmit} type="button" className="uk-button button">Find Games</button>
      </form>
        <h2>Search Results</h2>
      <GameResults>
        {searchResults.map((game) => (
          <GameCard key = {game.id} cover = {game.cover} name = {game.name} rating = {game.rating} id = {game.id}/> 
        ))}
      </GameResults>
      <h2>Related Games</h2>
      <GameResults>
        {similarResults.map((game) => (
          <GameCard key = {game.id} cover = {game.cover} name = {game.name} rating = {game.rating} id = {game.id}/> 
        ))}
      </GameResults>
    </div>
  );
}

export default Search;
