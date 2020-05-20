import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";

function GameInfo() {
    
  return (
    <div className="container GameInfo">
      <h1>On the Game Info page!</h1>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default GameInfo;
