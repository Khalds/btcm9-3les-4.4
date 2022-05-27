const mongoose = require('mongoose')

const twitSchema = mongoose.Schema({
  twitTitle: String,
  twitText: String,
  twitLikes: [{
    ref: 'Twit',
    type: mongoose.SchemaTypes.ObjectId
  }]
})

const Twit = mongoose.model('Twit', twitSchema)

module.exports = Twit;