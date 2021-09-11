var express = require("express");
const { protect } = require("../controllers/authController");
const { getAllPosts, createPost } = require("../controllers/postController");
var router = express.Router();

router.route("/").get(protect, getAllPosts).post(protect, createPost);

module.exports = router;
