const mongoose = require('mongoose')
const validator = require('validator')
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcryptjs')
const CryptoJS = require('crypto-js')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
})

userSchema.plugin(uniqueValidator)

userSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }

  next()
})

userSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('email')) {
    user.email = await CryptoJS.SHA256(user.email).toString(CryptoJS.enc.Base64)
  }
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
