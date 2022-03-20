const express = require("express");
const AuthController = require("../controllers/auth.controller");
const router = express.Router();

// LOGIN
router.post("/login", AuthController.login);

// REGISTER
router.post("/register", AuthController.register);

// REFRESH
router.post("/refresh", AuthController.refresh);
module.exports = router;
