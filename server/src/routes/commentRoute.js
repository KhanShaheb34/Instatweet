var express = require("express");
const { protect } = require("../controllers/authController");
const {
  createComment,
  getPostComments,
} = require("../controllers/commentController");
var router = express.Router();

router.route("/").post(protect, createComment);
router.route("/:postId").get(protect, getPostComments);

module.exports = router;
