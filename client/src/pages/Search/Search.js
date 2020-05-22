import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import SearchResults from "../../components/SearchResults";
import SearchCard from "../../components/SearchCard";


function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleFormSubmit(event) {
    event.preventDefault()
    console.log("Search", searchQuery)
    const fullSearch = `fields name, cover.image_id, aggregated_rating; limit 15; w cover != null & themes != (42); search "${searchQuery}";`
    // const fullSearch = `fields name, cover.image_id, aggregated_rating ; limit 15; search "Halo";`
    API.fetchGames(fullSearch).then((response) => { console.log(response); setSearchResults(response.data.map(game=>({
      id: game.gameId,
      name: game.name,
      rating: game.aggregated_rating,
      cover: game.cover.image_id
    }))) })
    //test console for game responses
    .then(() => { console.log(searchResults) });
  }

  return (
    <div className="uk-margin .uk-align-center">
      <h1>Search page!</h1>
      {/* <Link to="/">Go home</Link> */}
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
        <button onClick={handleFormSubmit} type="button" >Go!</button>
      </form>
      <SearchResults>
        {searchResults.map((game) => (
          <SearchCard key = {game.id} cover = {game.cover} name = {game.name} rating = {game.rating}/> 
        ))}
      </SearchResults>
    </div>
  );
}


{/* <div className="container Search">
  <h1>On the Search page!</h1>
  <Link to="/">Go home</Link>
  <form>
      <input 
      name="search"
      type= "text"
      placeholder="Search"
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
      />
      <button onClick={handleFormSubmit} type="button" >Go!</button>
  </form>
</div> */}

export default Search;
