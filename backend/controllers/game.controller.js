const db = require("../model/db");
const uniqid = require("uniqid");
module.exports.createGame = (req, res) => {
  const { p1, p2, p3, p4 } = req.body;
  const id = uniqid();
  db.execute("INSERT INTO game VALUE(?,?,?,?,?)", [null, p1, p2, p3, p4])
    .then((data) => {
      res.status(201).json({
        message: "game created",
        gameId: id,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

module.exports.getGameById = (req, res) => {
  const { id } = req.params;
  db.execute("SELECT * FROM game WHERE id=?", [id])
    .then((data) => {
      res.status(201).json({
        data: data[0],
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
