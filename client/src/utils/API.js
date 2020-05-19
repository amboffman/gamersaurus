import axios from "axios";
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
    return axios.post(`/api/new_user_favorite/${userID}`, {
      id: id,
      name: name,
      cover: cover,
      aggregated_rating: aggregated_rating,
    });
  },

  // remove user favorite
  removeUserFavorite: (id) => {
    return axios.delete(`/api/delete_user_favorite/${id}`);
  },
    
  fetchGames:(searchType) => {
    return axios.get("api/igdbgames", {
      params: { q: searchType },
    });
  }
};
