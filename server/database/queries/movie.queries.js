const Movie = require("../models/movie.model");

exports.getAllMovies = () => {
  return Movie.find({});
};

exports.getAllMoviesByCategory = ({ category }) => {
  return Movie.find({ category: category });
};
