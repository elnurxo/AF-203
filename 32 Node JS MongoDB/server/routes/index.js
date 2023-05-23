const artist_router = require('./artist.routes');
const song_router = require('./song.routes');

const router = {
    artist: artist_router,
    song: song_router
}

module.exports = router