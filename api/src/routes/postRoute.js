var express = require("express");
const { protect } = require("../controllers/authController");
const {
  getAllPosts,
  createPost,
  deletePost,
} = require("../controllers/postController");
var router = express.Router();

router.route("/").get(protect, getAllPosts).post(protect, createPost);
router.route("/:id").delete(protect, deletePost);

module.exports = router;
