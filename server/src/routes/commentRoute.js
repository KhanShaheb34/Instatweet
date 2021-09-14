var express = require("express");
const { protect } = require("../controllers/authController");
const {
  getAllComments,
  createComment,
} = require("../controllers/commentController");
var router = express.Router();

router.route("/").get(protect, getAllComments).post(protect, createComment);

module.exports = router;
