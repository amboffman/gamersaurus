const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/igdbgames", (req, res) => {
  axios
    ({
      url: "https://api-v3.igdb.com/games",
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'user-key': process.env.API_Key
      },
      data: "fields *; limit 10; sort popularity desc;"
    })
    .then((response) => {
      console.log(response.data)
      const igdbData = createGameFromIGDBData(response.data); 
      return res.json(igdbData);
    })
    .catch((error) => {
      // handle errors
       if (error.response) {
        console.log(error.response.statusText);
        res.sendStatus(error.response.status);
      } else {
        res.sendStatus(500);
      }
    });
});

function createGameFromIGDBData(IGDBData) {
  return IGDBData.items
    .map((item) => {
      const gameId = item.id;
      const {
        age_ratings,
        cover,
        first_release_date,
        genres,
        name,
        platforms,
        rating,
        screenshots,
        summary,
        videos,
      } = item;
      return {gameId, age_ratings, cover,nfirst_release_date, genres,first_release_date, name, platforms, rating, screenshots, summary, videos };
    })
}

module.exports = router;