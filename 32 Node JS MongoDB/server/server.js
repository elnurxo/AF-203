const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
dotenv.config();
app.use(bodyParser.json());
const router = require('./routes');

app.use('/api/songs',router.song);
app.use('/api/artists',router.artist);


PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}`);
});

DB_PASSWORD = process.env.DB_PASSWORD;
DB_CONNECTION = process.env.DB_CONNECTION;
mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD)).then(() => {
  console.log("Mongo DB connected!");
});
