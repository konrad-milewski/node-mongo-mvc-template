const express = require("express");
const router = express.Router();
const moodController = require("../controllers/mood");

router.get("/", moodController.getAll);

router.post("/", moodController.createOne);

module.exports = router;
