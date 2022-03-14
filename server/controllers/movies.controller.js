const Movie = require("../database/models/movie.model");

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200);
    res.send({ movies: movies || [] });
  } catch (error) {
    res.status(503);
    res.send({ message: error.message });
  }
};

exports.getAllMoviesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    if (category) {
      console.log(category);
      const movies = await Movie.find({ category: category }).exec();
      //   console.log(movies);
      if (movies && movies.length > 0) {
        res.status(200);
        res.send({ movies: movies, category: category });
      } else {
        res.status(404);
        res.send({ message: "movies not found" });
      }
    } else {
      res.status(400);
      res.send({ message: "missing category" });
    }
  } catch (error) {
    res.status(503);
    res.send({ message: error.message });
  }
};
