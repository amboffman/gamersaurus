const axios = require("axios");

module.exports = {
createGamesFromIGDBData: (gameData) => {
    return gameData.map((game) => {
      const {
        id,
        cover,
        first_release_date,
        name,
        aggregated_rating,
      } = game;
      return {
        id,
        cover,
        first_release_date,
        name,
        aggregated_rating,
      };
    });
  },
  createGameFromIGDBData: (gameData) => {
    return gameData.map((game) => {
      const cover = game.cover.image_id;
      const {
        age_ratings,
        first_release_date,
        category,
        genres,
        id,
        name,
        platforms,
        popularity,
        aggregated_rating,
        screenshots,
        summary,
        videos,
      } = game;
      return {
        age_ratings,
        category,
        cover,
        first_release_date,
        genres,
        id,
        name,
        platforms,
        popularity,
        aggregated_rating,
        screenshots,
        summary,
        videos,
      };
    });
  },
};
