const User = require("../database/models/user.model");
const jwt = require("jsonwebtoken");
const config = require("../config.json");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.find({ username, password });

  if (user) {
    const token = jwt.sign({ username }, config.secret, {
      expiresIn: config.tokenLife,
    });
    const refreshToken = jwt.sign({ username }, config.refreshTokenSecret, {
      expiresIn: config.refreshTokenLife,
    });
    const response = {
      status: "Logged in",
      token: token,
      refreshToken: refreshToken,
    };

    res.send(response);
  } else {
    res.status(404).send({ message: "wrong credentials" });
  }
};

exports.register = async (req, res) => {
  const { username, password } = req.body;

  const user = new User({ username, password });

  await user.save();

  const token = jwt.sign({ username }, config.secret, {
    expiresIn: config.tokenLife,
  });
  const refreshToken = jwt.sign({ username }, config.refreshTokenSecret, {
    expiresIn: config.refreshTokenLife,
  });
  const response = {
    status: "Logged in",
    token: token,
    refreshToken: refreshToken,
  };

  res.send(response);
};

exports.refresh = (req, res) => {
  // refresh the damn token
  const { refreshToken, username } = req.body;
  // if refresh token exists
  if (refreshToken && username) {
    const token = jwt.sign({ username }, config.secret, {
      expiresIn: config.tokenLife,
    });
    const response = {
      token: token,
    };
    res.status(200).send(response);
  } else {
    res.status(404).send("Invalid request");
  }
};
