import React, { useState } from "react";
import API from "../../utils/API";
import GameResults from "../../components/GameResults";
import GameCard from "../../components/GameCard";
import "./style.css";
import CarouselPlaceholder from "../../components/CarouselPlaceholder";


function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsLoading, setSearchResultsLoading] = useState(false);
  const [formSubmission, setFormSubmission] = useState(false)

  function handleFormSubmit(event) {
    event.preventDefault()
    setFormSubmission(true)
    setSearchResultsLoading(true)
    API.searchGames(searchQuery).then((response) => {
      setSearchResults(response.data.map(game => ({
        id: game.id,
        name: game.name,
        rating: game.aggregated_rating,
        cover: game.cover.image_id,
      })))
    }).then(data => {
      setTimeout(() => setSearchResultsLoading(false), 1500);
    });
  }

  return (
    <div className="uk-margin .uk-align-center App">
      <h1 className="App.header App.intro">Search</h1>
      <form className="uk-search uk-search-default" onSubmit={handleFormSubmit}>
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
      <h2>{formSubmission ? "SEARCH RESULTS" : ""}</h2>
      <GameResults>
        {searchResultsLoading ? <CarouselPlaceholder /> : 
          searchResults.map((game) => (
            <GameCard key={game.id} cover={game.cover} name={game.name} rating={game.rating} id={game.id} />
          ))
        }
      </GameResults>
    </div>
  );
}

export default Search;
