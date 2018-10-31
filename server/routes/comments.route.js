const express = require('express');
const router = express.Router();

// import commnet controller
const comment_controller = require("../controllers/comments.controller");
const comments = comment_controller.comments;

// GET all comments array
router.get("/comments", (req, res, next) => {
  return res.json(comments);
});

// GET specific comment id
router.get("/comments/:id", (req, res, next) => {
  const comment = comments.find(c => c._id == req.params.id);
  return res.json(comment);
});

// POST - add a comment to the comments array
router.post("/comments", (req, res, next) => {
  // increment _id +1
  const newComment = {
    _id: comments[comments.length-1]._id + 1,
    body: req.body.body,
    postId: req.body.postId
  };

  // add new comment to comments array
  comments.push(newComment);

  // return the item just added
  return res.json(comments[comments.length - 1]);
});

module.exports = router;