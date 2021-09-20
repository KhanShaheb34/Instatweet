var express = require("express");
const { protect } = require("../controllers/authController");
const {
  createFollower,
  checkFollower,
} = require("../controllers/followerController");
var router = express.Router();

router.route("/").post(protect, createFollower);
router.route("/check").post(protect, checkFollower);

module.exports = router;
