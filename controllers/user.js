const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const CryptoJS = require('crypto-js')
require('dotenv').config()

exports.signup = async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    res.send(user)
  } catch (e) {
    res.status(400).send(e)
  }
}

exports.login = async (req, res) => {
  try {
    const hashedEmail = await CryptoJS.SHA256(req.body.email).toString(
      CryptoJS.enc.Base64
    )
    const user = await User.findOne({ email: hashedEmail })
    if (!user) {
      throw new Error('Erreur de connexion')
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password)
    if (!isMatch) {
      throw new Error('Erreur de connexion')
    }
    res.status(200).json({
      userId: user._id,
      token: jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
      }),
    })
  } catch (e) {
    res.status(400).send()
  }
}
