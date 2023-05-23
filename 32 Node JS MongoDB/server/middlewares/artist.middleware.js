const ArtistPostSchema = require('../validations/artist.validation')

const ArtistPostMiddleware = (req, res, next) => {
  const { error } = ArtistPostSchema.validate(req.body);
  if (error === undefined) {
    next();
  } else {
    const { details } = error;
    console.log(details);
    const message = details.map((i) => i.message).join(",");
    res.send({ message: message });
  }
};

module.exports = ArtistPostMiddleware
