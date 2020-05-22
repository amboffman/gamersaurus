const express = require("express");
const axios = require("axios");
const IGDBAPI = require("../utils/igdbAPI")

const router = express.Router();

router.get("/igdbgames", (req, res) => {
  IGDBAPI.fetchgames(req.query.q)
    .then((gameData) => {
      const games = IGDBAPI.createGamesFromIGDBData(gameData);
      return res.json(games);
    })
    .catch((error) => {
      // handle errors
      console.log(error);
      console.log(error.request.url)
      if (error.response) {
        res.sendStatus(error.response.status);
      } else {
        res.sendStatus(500);
      }
    });
});

router.get("/igdbgame/:id", (req, res) => {
  const gameToSearch = `fields cover.image_id, name, genres.name, first_release_date, summary, age_ratings, platforms;
  where id=${req.params.id};`
  IGDBAPI.fetchgame(gameToSearch)
    .then((gameData) => {
      const games = IGDBAPI.createGameFromIGDBData(gameData);
      return res.json(games);
    })
    .catch((error) => {
      // handle errors
      console.log(error);
      console.log(error.request.url)
      if (error.response) {
        res.sendStatus(error.response.status);
      } else {
        res.sendStatus(500);
      }
    });
});

module.exports = router;