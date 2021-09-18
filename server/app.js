require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./src/routes/index");
const usersRouter = require("./src/routes/userRoutes");
const postRouter = require("./src/routes/postRoute");
const commentRouter = require("./src/routes/commentRoute");
const likeRouter = require("./src/routes/likeRoute");
const followerRouter = require("./src/routes/followerRoute");
const errorHandler = require("./src/middlewares/errorHandler");

require("./src/database/connection");
require("./src/database/association");

const app = express();

app.use(cors());
app.options("*", cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.use("/likes", likeRouter);
app.use("/followers", followerRouter);

app.use(errorHandler);

module.exports = app;
