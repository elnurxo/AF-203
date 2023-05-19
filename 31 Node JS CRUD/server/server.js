const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require('dotenv')
const crypto = require('crypto');
const app = express();
app.use(cors());
dotenv.config();
app.use(bodyParser.json());

const ARTISTS = [
  {
    id: 1,
    name: "Steve Lacy",
    age: 24,
    imageURL: "https://liftedasia.com/assets/content_images/steve-660x440.webp",
  },
];

app.get("/api", (req, res) => {
  res.send("welcome to out API!");
});

//ARTISTS CRUD
//GET ALL ARTISTS
app.get("/api/artists", (req, res) => {
  const { name } = req.query;
  if (!name) {
    res.status(200).send(ARTISTS);
  } else {
    res
      .status(200)
      .send(
        ARTISTS.filter((x) =>
          x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
        )
      );
  }
});
//GET ARTIST BY ID
app.get('/api/artists/:id',(req,res)=>{
    const{id} = req.params;
    res.status(200).send(ARTISTS.find((x)=>x.id==id))
})
//DELETE ARTIST
app.delete('/api/artists/:id',(req,res)=>{
    const id = req.params.id;
    //delete
    const deleteArtist = ARTISTS.find((x)=>x.id==id);
    const idx = ARTISTS.indexOf(deleteArtist);
    ARTISTS.splice(idx,1);
    res.status(203).send({
        message: `${deleteArtist.name} deleted successfully!`
    })
})
//POST ARTIST
app.post('/api/artists',(req,res)=>{
    const{name,age,imageURL} = req.body;
    const newArtist = {
        id: crypto.randomUUID(),
        name: name,
        age: age,
        imageURL: imageURL
    }
    ARTISTS.push(newArtist);

    res.status(201).send({
        message: `${newArtist.name} posted successfully`,
        payload: newArtist
    })
})
//EDIT ARTIST
app.put('/api/artists/:id',(req,res)=>{
    const id = req.params.id;
    const updatingArtist = ARTISTS.find((x)=>x.id==id);
    const{name,age,imageURL} = req.body;
    if (name) {
        updatingArtist.name = name;
    }
    if (age) {
        updatingArtist.age = age;
    }
    if (imageURL) {
        updatingArtist.imageURL = imageURL;
    }
    res.status(200).send(`${updatingArtist.name} updated successfully!`)
})
 
PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}`);
});
