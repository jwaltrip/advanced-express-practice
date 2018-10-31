// import comments array and export it
const comments = require("../comments");
module.exports.comments = comments;

// comments LIST fn
module.exports.list = function (req, res, next) {
  return res.json(comments);
};

// comments SHOW fn
module.exports.show = function (req, res, next) {
  const comment = comments.find(c => c._id == req.params.id);
  return res.json(comment);
};

// comments CREATE fn
module.exports.create = function (req, res, next) {
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
};
