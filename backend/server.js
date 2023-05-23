const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan("dev"));

const gameRoutes = require("./routes/game.routes");
const pointRoutes = require("./routes/point.routes");
server.get("/", (req, res) => {
  res.send("hello");
});

server.use("/game", gameRoutes);
server.use("/point", pointRoutes);
server.listen(8000, () => {
  console.log("server is running on http://127.0.0.1:8000");
});
