const Twit = require("../models/Twit.model")

module.exports.twitController = {
  postTwit: (req, res) => {
    Twit.create({
        twitTitle: req.body.twitTitle,
        twitText: req.body.twitText,
      })
      .then(() => {
        res.json("Twit added")
      })
      .catch((err => res.json("Ошибка")))
  },
  getTwitById: (req, res) => {
    Twit.findById(req.params.id)
      .then((data) => {
        res.json(data)
      })
      .catch((err => res.json("Ошибка")))
  },
  getTwits: (req, res) => {
    Twit.find()
      .then((data) => {
        res.json(data)
      })
      .catch((err => res.json(err.message)))
  },
  deleteTwitById: (req, res) => {
    Twit.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Twit was deleted")
      })
      .catch((err) => res.json("Ошибка"))
  },
  patchTwitById: (req, res) => {
    Twit.findByIdAndUpdate(req.params.id, {
        twitTitle: req.body.twitTitle,
        twitText: req.body.twitText,
        $push: {
          twitLikes: req.body.twitLikes
        }
      })
      .then(() => {
        res.json("Twit was update")
      })
      .catch((err) => res.json("Ошибка"))
  },
}