import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import InfoCard from "../../components/InfoCard";
import Carousel from "../../components/Carousel/Carousel"
import "./style.css";

function GameInfo() {
  return (
    <div className="uk-container GameInfo">
      <Link id="closeButton" to="/">
        Go home
      </Link>
      <div className="">
        <img
          id="coverImage"
          src="https://straffordchiropractic.com/wp-content/uploads/2017/04/poster-placeholder-203x300.png"
        />
        <Carousel>
          <InfoCard/>
          <InfoCard/>
          <InfoCard/>
        </Carousel>
      </div>
    </div>
  );
}

export default GameInfo;
