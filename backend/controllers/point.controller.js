const db = require("../model/db");

module.exports.getPointById = (req, res) => {
  const { id } = req.params;
  db.execute("SELECT * FROM point WHERE round_of=?", [id])
    .then((data) => {
      res.status(201).json({ data: data[0] });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
