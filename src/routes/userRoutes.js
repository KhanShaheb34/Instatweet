var express = require("express");
const { protect } = require("../controllers/authController");
const {
  register,
  getAllUsers,
  login,
} = require("../controllers/userController");
var router = express.Router();

router.route("/").get(protect, getAllUsers).post(register);
router.route("/login").post(login);

module.exports = router;
