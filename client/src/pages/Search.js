import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState("");

function handleFormSubmit (event) {
  event.preventDefault()
  console.log("Search", searchQuery)
  const fullSearch = `fields *; limit 15; search "${searchQuery}";`
  API.fetchGames(fullSearch)
  .then((response)=>{setSearchResults(response.data)
});
}
  return (
    <div className="container Search">
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
    </div>
  );
}

export default Search;
