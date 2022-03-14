const mongoose = require("mongoose");

const app = require("./app");

const PORT = 8080;

mongoose
  .connect("mongodb://mongo:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server starts in port: ", PORT);
    });
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
