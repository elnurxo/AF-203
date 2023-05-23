const ArtistModel = require('../models/artist.model');
const SongModel = require('../models/song.model');

const artistController = {
  getAll: async (req, res) => {
    const { name } = req.query;
    const artists = await ArtistModel.find();
    if (!name) {
      res.status(200).send(artists);
    } else {
      const searchedArtists = artists.filter((x) =>
        x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
      );
      res.status(200).send(searchedArtists);
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const artist = await ArtistModel.findById(id);
    res.status(200).send(artist);
  },
  delete: async (req, res) => {
    const id = req.params.id;
    //delete
    const deleteArtist = await ArtistModel.findByIdAndDelete(id);
    await SongModel.deleteMany({ artistID: deleteArtist._id });
    res.status(203).send({
      message: `${deleteArtist.name} deleted successfully!`,
    });
  },
  post: async (req, res) => {
    const { name, age, imageURL } = req.body;
    const newArtist = new ArtistModel({
      name: name,
      age: age,
      imageURL: imageURL,
    });
    await newArtist.save();
    res.status(201).send({
      message: `${newArtist.name} posted successfully`,
      payload: newArtist,
    });
  },
  edit: async(req, res) => {
    const id = req.params.id;
    const { name, age, imageURL } = req.body;
    const updatingArtist = {name:name,age:age,imageURL:imageURL};
    await ArtistModel.findByIdAndUpdate(id,updatingArtist);
    res.status(200).send(`${updatingArtist.name} updated successfully!`);
  }
};

module.exports = artistController;
