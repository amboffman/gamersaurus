import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import InfoCard from "../../components/InfoCard";
import Carousel from "../../components/Carousel";
import GameBanner from "../../components/GameBanner";
import "./style.css";

function GameInfo() {
  return (
    <div className="GameInfo">
      <span id="closeButton">
        <Link to="/">✖</Link>
      </span>
      <div className="">
        <img
          className="uk-align-center"
          id="coverImage"
          src="https://straffordchiropractic.com/wp-content/uploads/2017/04/poster-placeholder-203x300.png"
        />
        <GameBanner />
        <Carousel>
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </Carousel>
      </div>
    </div>
  );
}

export default GameInfo;
