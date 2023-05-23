const SongModel = require("../models/song.model");

const songController = {
  getAll: async (req, res) => {
    const AllSongs = await SongModel.find();
    res.status(200).send(AllSongs);
  },
  getArtistAll: async (req, res) => {
    const { artistID } = req.params;
    const songs = await SongModel.find({ artistID: artistID });
    res.status(200).send(songs);
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const song = await SongModel.findById(id);
    res.status(200).send(song);
  },
  delete: async(req,res)=>{
    const id = req.params.id;
    console.log('ID: ',id);
    const deleteSong = await SongModel.findByIdAndDelete(id);
    res.status(203).send({data: deleteSong,message: 'song deleted successfully!'});
  },
  post: async (req, res) => {
    const { title, duration, cover, songURL, artistID } = req.body;
    const newSong = new SongModel({
      title: title,
      duration: duration,
      cover: cover,
      songURL: songURL,
      artistID: artistID,
    });
    await newSong.save();
    res.status(201).send({ message: "song posted successfully!" });
  },
};

module.exports = songController
