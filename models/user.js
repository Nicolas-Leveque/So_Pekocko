const mongoose = require('mongoose')
const validator = require('validator')
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Adresse email invalide')
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
})

userSchema.plugin(uniqueValidator)

// userSchema.statics.findByCredentials = async (email, password) => {
//   const user = await user.findOne({ email })
//   if (!user) {
//     throw new Error('Erreur de connexion')
//   }
//   const isMatch = await bcrypt.compare(password, user.password)

//   if (!isMatch) {
//     throw new Error('Erreur de connexion')
//   }

//   return user
// }

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8)
  }
  next()
})

module.exports = mongoose.model('User', userSchema)
