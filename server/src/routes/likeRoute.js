var express = require("express");
const { protect } = require("../controllers/authController");
const { createLike } = require("../controllers/likeController");
var router = express.Router();

router.route("/").post(protect, createLike);

module.exports = router;
