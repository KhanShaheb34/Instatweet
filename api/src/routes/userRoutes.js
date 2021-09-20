var express = require("express");
const { protect } = require("../controllers/authController");
const {
  register,
  getAllUsers,
  login,
  getSingleUser,
  updateUser,
} = require("../controllers/userController");
var router = express.Router();

router
  .route("/")
  .get(protect, getAllUsers)
  .post(register)
  .put(protect, updateUser);
router.route("/login").post(login);
router.route("/:username").get(protect, getSingleUser);

module.exports = router;
