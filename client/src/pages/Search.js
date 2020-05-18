import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Search() {
    
  return (
    <div className="container Search">
      <h1>On the Search page!</h1>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default Search;