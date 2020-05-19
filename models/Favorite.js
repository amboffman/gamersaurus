const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  cover: {
    type: String,
  },
  aggregated_rating: {
    type: Number,
  },
});
const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = Favorite;
