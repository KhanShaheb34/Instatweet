var express = require("express");
const { protect } = require("../controllers/authController");
const {
  createComment,
  getPostComments,
  deleteComment,
} = require("../controllers/commentController");
var router = express.Router();

router.route("/").post(protect, createComment);
router
  .route("/:id")
  .get(protect, getPostComments)
  .delete(protect, deleteComment);

module.exports = router;
