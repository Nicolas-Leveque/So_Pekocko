const mongoose = require('mongoose')
const validator = require('validator')

const sauceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: {
    type: String,
    required: true,
    maxlength: 32,
    set: sanitizeEntries,
  },
  manufacturer: {
    type: String,
    required: true,
    maxlength: 32,
    set: sanitizeEntries,
  },
  description: {
    type: String,
    required: true,
    maxlength: 128,
    set: sanitizeEntries,
  },
  mainPepper: {
    type: String,
    required: true,
    maxlength: 16,
    set: sanitizeEntries,
  },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: { type: [String], default: [] },
  usersDisliked: { type: [String], default: [] },
})

function sanitizeEntries(value) {
  return validator.escape(value)
}

const Sauce = mongoose.model('Sauce', sauceSchema)

module.exports = Sauce
