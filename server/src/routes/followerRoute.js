var express = require("express");
const { protect } = require("../controllers/authController");
const { createFollower } = require("../controllers/followerController");
var router = express.Router();

router.route("/").post(protect, createFollower);

module.exports = router;
