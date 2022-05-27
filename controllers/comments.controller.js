const {
  findByIdAndDelete,
  findByIdAndRemove,
} = require("../models/Comment.model")

const Comment = require("../models/Comment.model")

module.exports.commentController = {
  postComment: (req, res) => {
    Comment.create({
      commentUserName: req.body.commentUserNam,
      commentText: req.body.commentText,
      commentTwit: req.body.commentTwit
    }).then(() => {
      res.json('Comment added')
    }).catch((err) => res.json("Error"))
  },
  getCommentById: (req, res) => {
    Comment.findById(req.params.id).then((data) => {
        res.json(data)
      }).populate('commentUserName')
      .catch((err) => res.json("Error"))
  },
  getComments: (req, res) => {
    Comment.find().then((data) => {
      res.json(data)
    }).catch((err) => res.json("Error"))
  },
  deleteCommentById: (req, res) => {
    Comment.findByIdAndRemove(req.params.id).then(() => {
      res.json("Comment was deleted")
    }).catch((err) => res.json("Error"))
  },
  patchCommentById: (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, {
      commentText: req.body.commentText,
    }).then(() => {
      res.json("Comment was update")
    }).catch((err) => res.json("Error"))
  }
}