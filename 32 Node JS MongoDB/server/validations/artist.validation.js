const Joi = require('joi');

const ArtistPostSchema = Joi.object({
    name: Joi.string().max(30).min(2).required(),
    age: Joi.number().min(17).positive().integer().required(),
    imageURL: Joi.string().required(),
})

module.exports = ArtistPostSchema