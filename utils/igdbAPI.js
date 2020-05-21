const axios = require("axios");

module.exports = {
  fetchgames: (query) => {
    return axios({
      url: `https://api-v3.igdb.com/games`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key": process.env.API_Key,
      },
      data: query,
    }).then((response) => {
      return response.data;
    });
  },
  createGameFromIGDBData: (gameData) => {
    return gameData.map((game) => {
      const gameId = game.id;
      const cover = game.cover.image_id;
      const {
        age_ratings,
        first_release_date,
        genres,
        name,
        platforms,
        popularity,
        aggregated_rating,
        screenshots,
        summary,
        videos,
      } = game;
      return {
        gameId,
        age_ratings,
        cover,
        first_release_date,
        genres,
        name,
        platforms,
        popularity,
        aggregated_rating,
        screenshots,
        summary,
        videos,
      };
    });
  }
  
};
