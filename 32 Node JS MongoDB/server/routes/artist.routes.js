const express = require('express');
const artist_router = express.Router();
const artistController = require('../controllers/artist.controller')
const ArtistPostMiddleware = require('../middlewares/artist.middleware')

artist_router.get('/',artistController.getAll);

artist_router.get('/:id', artistController.getOne);

artist_router.delete('/:id',artistController.delete);

artist_router.post('/',ArtistPostMiddleware,artistController.post);

artist_router.put('/:id',artistController.edit);

module.exports = artist_router;