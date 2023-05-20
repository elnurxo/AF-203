const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const crypto = require("crypto");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
dotenv.config();
app.use(bodyParser.json());

//Artist Schema
const ArtistSchema = new mongoose.Schema({
  name: String,
  age: Number,
  imageURL: String,
});
const ArtistModel = new mongoose.model("Artists", ArtistSchema);

const SongSchema = new mongoose.Schema({
  title: String,
  duration: Number,
  cover: String,
  songURL: String,
  artistID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artists'
  } 
})

const SongModel = new mongoose.model("Songs",SongSchema);


app.get("/api", (req, res) => {
  res.send("welcome to out API!");
});

//ARTISTS CRUD
//GET ALL ARTISTS - MONGO DB
app.get("/api/artists", async (req, res) => {
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
});
//GET ARTIST BY ID - MONGO DB
app.get("/api/artists/:id", async(req, res) => {
  const { id } = req.params;
  const artist = await ArtistModel.findById(id)
  res.status(200).send(artist);
});
//DELETE ARTIST - MONGO DB
app.delete("/api/artists/:id",async(req, res) => {
  const id = req.params.id;
  //delete
  const deleteArtist = await ArtistModel.findByIdAndDelete(id);
  await SongModel.deleteMany({artistID: deleteArtist._id});
  res.status(203).send({
    message: `${deleteArtist.name} deleted successfully!`,
  });
});
//POST ARTIST - MONGO DB
app.post("/api/artists", async (req, res) => {
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
});
//EDIT ARTIST - MONGO DB
app.put("/api/artists/:id", async(req, res) => {
  const id = req.params.id;
  const { name, age, imageURL } = req.body;
  const updatingArtist = {name:name,age:age,imageURL:imageURL};
  await ArtistModel.findByIdAndUpdate(id,updatingArtist);
  res.status(200).send(`${updatingArtist.name} updated successfully!`);
});

//SONG CRUD
//GET ALL SONGS
app.get('/api/songs',async(req,res)=>{
  const AllSongs = await SongModel.find();
  res.status(200).send(AllSongs);
})
//GET ARTISTS ALL SONGS
app.get('/api/songs/:artistID',async(req,res)=>{
  const{artistID} = req.params;
  const songs = await SongModel.find({artistID: artistID})
  res.status(200).send(songs)
})
//GET SONG BY ID 
app.get('/api/songs/:id',async(req,res)=>{
  const{id} = req.params;
  const song = await SongModel.findById(id);
  res.status(200).send(song);
})
app.post('/api/songs',async(req,res)=>{
  const{title,duration,cover,songURL,artistID} = req.body;
  const newSong = new SongModel({
    title: title,
    duration: duration,
    cover: cover,
    songURL: songURL,
    artistID: artistID
  })
  await newSong.save();
  res.status(201).send({message: 'song posted successfully!'});
})

app.delete('/api/songs/:id',async(req,res)=>{
  const id = req.params.id;
  console.log('ID: ',id);
  const deleteSong = await SongModel.findByIdAndDelete(id);
  res.status(203).send({data: deleteSong,message: 'song deleted successfully!'});
})


PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}`);
});

DB_PASSWORD = process.env.DB_PASSWORD;
DB_CONNECTION = process.env.DB_CONNECTION;

mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD)).then(() => {
  console.log("Mongo DB connected!");
});
