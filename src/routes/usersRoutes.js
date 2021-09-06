var express = require("express");
const { registerUser, getAllUsers } = require("../controllers/userController");
var router = express.Router();

router.route("/").get(getAllUsers).post(registerUser);

module.exports = router;
