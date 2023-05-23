const mongoose = require("mongoose");

const SongModel = new mongoose.model(
  "Songs",
  new mongoose.Schema({
    title: String,
    duration: Number,
    cover: String,
    songURL: String,
    artistID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artists",
    },
  })
);

module.exports = SongModel
