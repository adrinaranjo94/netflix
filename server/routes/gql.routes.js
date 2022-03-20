const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const {
  getAllMovies,
  getAllMoviesByCategory,
} = require("../database/queries/movie.queries");

const router = express.Router();

let schema = buildSchema(`
type Query {
    movies: [Movie]
    moviesByCategory(name: String!):[Movie]
}
type Movie {
    title: String!
    poster_path: String!
    overview: String!
    adult: Boolean
    backdrop_path: String!
    category: String!
}
type User {
    username: String!
    password: String!
}
`);

let root = {
  movies: getAllMovies,
  moviesByCategory: getAllMoviesByCategory,
};

router.use(
  "/",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

module.exports = router;
