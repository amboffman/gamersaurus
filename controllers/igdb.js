const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/igdbgames", (req, res) => {
  console.log(req.query.q);
  axios({
    url: "https://api-v3.igdb.com/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      "user-key": process.env.API_Key,
    },
    data: req.query.q,
  })
    .then((response) => {
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
  return IGDBData.map((item) => {
    const gameId = item.id;
    const {
      age_ratings,
      cover,
      first_release_date,
      genres,
      name,
      platforms,
      aggregated_rating,
      screenshots,
      summary,
      videos,
    } = item;
    return {
      gameId,
      age_ratings,
      cover,
      first_release_date,
      genres,
      name,
      platforms,
      aggregated_rating,
      screenshots,
      summary,
      videos,
    };
  });
}

module.exports = router;

// const fakeIGDBData = [
//   {
//       "id": 115278,
//       "age_ratings": [
//           25494
//       ],
//       "aggregated_rating": 86.6666666666667,
//       "aggregated_rating_count": 4,
//       "alternative_names": [
//           23839
//       ],
//       "category": 0,
//       "collection": 767,
//       "cover": 93448,
//       "created_at": 1550016000,
//       "first_release_date": 1564012800,
//       "franchise": 546,
//       "franchises": [
//           546
//       ],
//       "game_modes": [
//           1
//       ],
//       "genres": [
//           12
//       ],
//       "hypes": 1,
//       "involved_companies": [
//           74454,
//           74455,
//           80493
//       ],
//       "keywords": [
//           1039,
//           1323,
//           1868
//       ],
//       "name": "Rune Factory 4 Special",
//       "platforms": [
//           130
//       ],
//       "player_perspectives": [
//           2,
//           3
//       ],
//       "popularity": 2090.622837928576,
//       "pulse_count": 20,
//       "release_dates": [
//           165088,
//           185024,
//           185025
//       ],
//       "screenshots": [
//           284045,
//           284047,
//           284048,
//           284049,
//           355347,
//           355348,
//           355349,
//           355350,
//           355351,
//           355352
//       ],
//       "similar_games": [
//           28010,
//           54775,
//           55199,
//           81249,
//           96217,
//           101608,
//           103168,
//           103303,
//           106987,
//           119171
//       ],
//       "slug": "rune-factory-4-special",
//       "summary": "Experience this legendary fantasy adventure like never before and embark on exciting escapades with your favorite characters in the brand new Newlywed Mode!",
//       "tags": [
//           1,
//           17,
//           268435468,
//           536871951,
//           536872235,
//           536872780
//       ],
//       "themes": [
//           1,
//           17
//       ],
//       "total_rating": 86.6666666666667,
//       "total_rating_count": 4,
//       "updated_at": 1589846400,
//       "url": "https://www.igdb.com/games/rune-factory-4-special",
//       "version_parent": 6874,
//       "version_title": "Special",
//       "videos": [
//           24922,
//           28296,
//           34176
//       ],
//       "websites": [
//           113100
//       ]
//   }
// ]
// console.log(createGameFromIGDBData(fakeIGDBData))
