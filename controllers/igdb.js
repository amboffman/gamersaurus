const express = require("express");
// const axios = require("axios");
const IGDBAPI = require("../utils/igdbAPI");

const router = express.Router();
// ROUTES NEEDED
// Trending Games with title, rating & cover
// Coming Soon with title, rating & cover

router.get("/igdbgames", (req, res) => {
  IGDBAPI.fetchgames(req.query.q)
    .then((gameData) => {
      const games = IGDBAPI.createGameFromIGDBData(gameData);
      return res.json(games);
    })
    .catch((error) => {
      // handle errors
      console.log(error);
      console.log(error.request.url);
      if (error.response) {
        res.sendStatus(error.response.status);
      } else {
        res.sendStatus(500);
      }
    });
});

module.exports = router;
