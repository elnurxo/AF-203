const mongoose = require("mongoose");

const ArtistModel = new mongoose.model(
  "Artists",
  new mongoose.Schema({
    name: String,
    age: Number,
    imageURL: String,
  })
);

module.exports = ArtistModel

