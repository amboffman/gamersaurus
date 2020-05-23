const express = require("express");
const axios = require("axios");
const IGDBAPI = require("../utils/igdbAPI");

const router = express.Router();

router.get("/igdbgames", (req, res) => {
  return axios({
    url: "https://api-v3.igdb.com/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      "user-key": process.env.API_Key,
    },
    data: req.query.q,
  })
    .then((response) => {
      return response.data;
    })
    .then((gameData) => {
      const games = IGDBAPI.createGamesFromIGDBData(gameData);
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

router.get("/igdbgame/:id", (req, res) => {
  return axios({
    url: "https://api-v3.igdb.com/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      "user-key": process.env.API_Key,
    },
    data: req.query.q,
  })
    .then((response) => {
      return response.data;
    })
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
