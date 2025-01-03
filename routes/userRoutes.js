const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");

router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUser);

module.exports = router;
