const express = require('express');
const router = express.Router();

// import commnet controller
const comment_controller = require("../controllers/comments.controller");
// const comments = comment_controller.comments;

// GET all comments array
router.get("/comments", comment_controller.list);

// GET specific comment id
router.get("/comments/:id", comment_controller.show);

// POST - add a comment to the comments array
router.post("/comments", comment_controller.create);

module.exports = router;
