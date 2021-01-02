const mongoose = require('mongoose')

const sauceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true, maxlength: 32 },
  manufacturer: { type: String, required: true, maxlength: 32 },
  description: { type: String, required: true, maxlength: 128 },
  mainPepper: { type: String, required: true, maxlength: 16 },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: { type: [String], default: [] },
  usersDisliked: { type: [String], default: [] },
})

const Sauce = mongoose.model('Sauce', sauceSchema)

module.exports = Sauce
