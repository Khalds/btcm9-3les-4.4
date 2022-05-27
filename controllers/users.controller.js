const {
  findByIdAndDelete,
  findByIdAndRemove,
} = require("../models/User.model")

const User = require("../models/User.model")

module.exports.userController = {
  postUser: (req, res) => {
    User.create({
      userName: req.body.userName,
      userSaved: req.body.userSaved
    }).then(() => {
      res.json('User added')
    }).catch((err) => res.json("Error"))
  },
  getUserById: (req, res) => {
    User.findById(req.params.id).then((data) => {
        res.json(data)
      }).populate('userSaved')
      .catch((err) => res.json("Error"))
  },
  getUsers: (req, res) => {
    User.find().then((data) => {
      res.json(data)
    }).catch((err) => res.json("Error"))
  },
  deleteUserById: (req, res) => {
    User.findByIdAndRemove(req.params.id).then(() => {
      res.json("User was deleted")
    }).catch((err) => res.json("Error"))
  },
  patchUserById: (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
      userName: req.body.userName,
      $push: {
        userSaved: req.body.userSaved
      }
    }).then(() => {
      res.json("User was update")
    }).catch((err) => res.json("Error"))
  }
}