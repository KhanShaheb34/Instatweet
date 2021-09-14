var express = require("express");
const { protect } = require("../controllers/authController");
const {
  register,
  getAllUsers,
  login,
  getSingleUser,
} = require("../controllers/userController");
var router = express.Router();

router.route("/").get(protect, getAllUsers).post(register);
router.route("/login").post(login);
router.route("/:username").get(protect, getSingleUser);

module.exports = router;
