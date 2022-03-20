const express = require("express");
const router = express.Router();

const movies = require("./movies.routes");
const auth = require("./auth.routes");
const gql = require("./gql.routes");

router.use("/auth", auth);

router.use("/graphql", gql);

// secure
router.use(require("../middlewares/auth.middleware"));
router.use("/movies", movies);

module.exports = router;
