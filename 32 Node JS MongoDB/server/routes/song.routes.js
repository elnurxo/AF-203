const express = require('express');
const song_router = express.Router();
const songController = require('../controllers/song.controller');

song_router.get('/',songController.getAll);

song_router.get('/:artistID',songController.getArtistAll);

song_router.get('/:id',songController.getOne);

song_router.post('/', songController.post);

song_router.delete('/:id',songController.delete);

module.exports = song_router;