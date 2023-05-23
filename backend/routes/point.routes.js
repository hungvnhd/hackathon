const express = require("express");
const router = express.Router();
const pointController = require("../controllers/point.controller");

router.get("/:id", pointController.getPointById);

module.exports = router;
