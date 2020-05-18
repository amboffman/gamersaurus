const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/igdbgames", (req, res) => {

  if (!req.query.q) {
    return res.status(400).send("Must include 'q' parameter");
  }
  // Example query: q=intitle:harry+potter
  // get parameters for search
  // search google books api
  axios
    .get("https://api-v3.igdb.com", {
      url: "https://api-v3.igdb.com/games",
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'user-key': process.env.API_Key
      },
      data: "age_ratings, cover, first_release_date, genres, name, platforms, rating, screenshots, summary, videos;"
    
    })
    .then((response) => {
      // filter out invalid items
      const validBookData = age_ratings, cover, first_release_date, genres, platforms, rating, screenshots, summary, videoscreateBooksFromGoogleData(response.data);
      return res.json(validBookData);
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
        title,
        authors,
        description,
        imageLinks,
        infoLink,
      } = item.volumeInfo;
      const image = imageLinks.thumbnail;
      const link = infoLink;
      return { title, authors, description, image, link, googleId };
    })
    .filter((item) => validateBook(item));
}

function validateBook({ title, authors, description, image, link, googleId }) {
  return (
    title && Array.isArray(authors) && description && image && link && googleId
  );
}

module.exports = router;