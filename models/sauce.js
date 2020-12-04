const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
  userID: { type: String },
  name: { type: String },
  manufacturer: { type: String },
  description: { type: String },
  mainingredient: { type: String },
  imageUrl: { type: String },
  heat: { type: Number },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersliked: { type: [String] },
  usersdisliked: { type: [String] },
});

module.exports = mongoose.model('Sauce', sauceSchema);
