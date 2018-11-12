// import the Comments monoose model
const Comments = require("../models/CommentModel");

// comments LIST fn
module.exports.list = function (req, res, next) {
  Comments.find({}).exec()
    .then(comments => {
      return res.send(comments);
    })
    .catch(err => {
      console.log("Error listing all comments ", err);
      return res.send(err);
    });
};

// comments SHOW fn
module.exports.show = function (req, res, next) {
  Comments.findById(req.params.id).exec()
    .then(comment => {
      return res.send(comment);
    })
    .catch(err => {
      console.log("Error listing a single comment ", err);
      return res.send(err);
    });
};

// comments CREATE fn
module.exports.create = function (req, res, next) {
  // create new comment model
  const comment = new Comments();
  // set data to be saved to mongo
  comment.body = req.body.body;
  // insert the new document, and return the newly created doc after it's inserted
  comment.save((err, newComment) => {
    if (err) return res.send(err);

    return res.send(newComment);
  });
};
