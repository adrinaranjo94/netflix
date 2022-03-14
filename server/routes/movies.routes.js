const express = require("express");
const MoviesController = require("../controllers/movies.controller");
const router = express.Router();

// GET ALL MOVIES
router.get("/", MoviesController.getAllMovies);

// GET ALL MOVIES BY CATEGORY
router.get("/category/:category", MoviesController.getAllMoviesByCategory);

module.exports = router;
