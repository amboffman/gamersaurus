import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState("");
  
  useEffect(() => {
    const fullSearch = `fields *; limit 15; search "${searchQuery}";
    `
    API.fetchGames(fullSearch)
    .then((response)=>{setSearchResults(response) 
  });
  }, [searchQuery]);


  function handleFormSubmit (event) {
    const { value } = event.target;
    event.preventDefault();
    setSearchQuery(value)
  };
  
  console.log(searchResults);
  
  return (
    <div className="container Search">
      <h1>On the Search page!</h1>
      <Link to="/">Go home</Link>
      <form>
          <input 
          name="search"
          placeholder="Search"
          />
          <button onClick= {handleFormSubmit} type="button" >Submit!</button>
      </form>
    </div>
  );
}

export default Search;
