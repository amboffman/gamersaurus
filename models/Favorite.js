const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  backgroundImage: {
    type: String,
  },
});
const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = Favorite;
