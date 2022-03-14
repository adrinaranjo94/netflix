const mongoose = require("mongoose");

const MovieSchema = require("../schemas/movie.schema");

const Movie = mongoose.model("movie", MovieSchema);

module.exports = Movie;
