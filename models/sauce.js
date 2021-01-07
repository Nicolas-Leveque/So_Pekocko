const mongoose = require('mongoose')
const validator = require('validator')

const sauceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: {
    type: String,
    required: true,
    maxlength: 32,
    validate(value) {
      validator.escape(value)
    },
  },
  manufacturer: {
    type: String,
    required: true,
    maxlength: 32,
    validate(value) {
      validator.escape(value)
    },
  },
  description: {
    type: String,
    required: true,
    maxlength: 128,
    validate(value) {
      validator.escape(value)
    },
  },
  mainPepper: {
    type: String,
    required: true,
    maxlength: 16,
    validate(value) {
      validator.escape(value)
    },
  },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: { type: [String], default: [] },
  usersDisliked: { type: [String], default: [] },
})

const Sauce = mongoose.model('Sauce', sauceSchema)

module.exports = Sauce
