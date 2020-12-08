const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
  },
})

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await user.findOne({ email })
  if (!user) {
    throw new Error('Unable to Login')
  }
  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    throw new Error('Unable to Login')
  }
  return user
}

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
