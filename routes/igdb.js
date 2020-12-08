const express = require("express");
const axios = require("axios");
const IGDBAPI = require("../controllers/igdb");

const router = express.Router();

router.get("/igdbgames", (req, res) => {
  return axios({
    url: `https://id.twitch.tv/oauth2/token?client_id=${process.env.Client_ID}&client_secret=${process.env.Client_Secret}&grant_type=client_credentials`,
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  })
    .then((results) => {
      return axios({
        url: "https://api.igdb.com/v4/games",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Client-ID": process.env.Client_ID,
          Authorization: `Bearer ${results.data.access_token}`,
        },
        data: req.query.q,
      })
        .then((response) => {
          return response.data;
        })
        .then((gameData) => {
          const games = IGDBAPI.createGamesFromIGDBData(gameData);
          return res.json(games);
        });
    })
    .catch((error) => {
      // handle errors
      if (error.response) {
        res.sendStatus(error.response.status);
      } else {
        res.sendStatus(500);
      }
    });
});

router.get("/igdbgame/:id", (req, res) => {
  return axios({
    url: "https://api.igdb.com/v4/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      // "user-key": process.env.API_Key,
      "Client-ID": process.env.Client_ID,
      Authorization: process.env.Authorization,
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
