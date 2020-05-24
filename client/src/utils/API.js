import axios from "axios";

const currentDate = Math.floor(Date.now() / 1000);

export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post("/api/signup", {
      username: username,
      email: email,
      password: password,
    });
  },
  // add new user favorite
  addUserFavorite: (userID, id, name, cover, aggregated_rating) => {
    return axios.put(`/api/new_user_favorite/${userID}`, {
      user: userID,
      id: id,
      name: name,
      cover: cover,
      aggregated_rating: aggregated_rating,
    });
  },

  // remove user favorite
  removeUserFavorite: (id, gameId) => {
    return axios.delete(`/api/delete_user_favorite/${id}`, {
      id: gameId,
    });
  },
    
  searchGames:(searchQuery) => {
    return axios.get("api/igdbgames", {
      params: { q: `fields name, cover.image_id, aggregated_rating; limit 15; w cover != null & themes != (42); search "${searchQuery}";` },
    });
  },
  fetchTrendingGames:() => {
    return axios.get("api/igdbgames", {
      params: { q: `
      fields name, cover.image_id, aggregated_rating, category; limit 10; 
      where first_release_date < ${currentDate} & first_release_date > ${
        currentDate - 7889229
      } & cover != null & themes != (42) & category = 0; sort popularity desc;` },
    });
  },

  fetchRecentReleases:() => {
    return axios.get("api/igdbgames", {
      params: { q: `fields name, cover.image_id, aggregated_rating; limit 15; where first_release_date <= ${currentDate} & cover != null & themes != (42) & category = 0; sort first_release_date desc;`},
    });
  },

  fetchComingSoon:() => {
    return axios.get("api/igdbgames", {
      params: { q: `fields name, cover.image_id, first_release_date, aggregated_rating; where first_release_date > ${currentDate} & themes != (42) & category = 0 & first_release_date != null & cover != null; sort first_release_date asc;`},
    });
  },

  fetchSimilarGames:(ids) => {
    return axios.get("api/igdbgames", {
      params: { q: `fields name, cover.image_id, first_release_date, aggregated_rating; where id= (${ids}) & themes != (42) & category = 0 & first_release_date != null & cover != null; limit 10;`},
    });
  },

  searchGame:(id) => {
    return axios.get(`api/igdbgame/${id}`, { params: {q:`fields cover.image_id, name, genres.name, screenshots.image_id, first_release_date, summary, aggregated_rating,age_ratings.rating, platforms.abbreviation, similar_games;
    where id=${id};`},})
  }
};
