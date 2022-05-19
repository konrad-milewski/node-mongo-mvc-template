const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();
const { getUser } = require("../services/user");

router.get("/", userController.get);

router.get("/:id", getUser, userController.getOne);

router.post("/", userController.createOne);

router.patch("/:id", getUser, userController.updateOne);

router.delete("/:id", getUser, userController.deleteOne);

module.exports = router;
