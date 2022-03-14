import axios from "../core/axios";

export const MoviesService = () => {
  const fetchMovies = () => axios.get("/movies");

  const fetchMoviesByCategory = (category) =>
    axios.get(`/movies/category/${category}`);

  return { fetchMovies, fetchMoviesByCategory };
};
