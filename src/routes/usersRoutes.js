var express = require("express");
const {
  register,
  getAllUsers,
  login,
} = require("../controllers/userController");
var router = express.Router();

router.route("/").get(getAllUsers).post(register);
router.route("/login").post(login);

module.exports = router;
