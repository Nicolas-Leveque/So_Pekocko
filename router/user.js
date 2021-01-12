const express = require('express')
const ExpressBrute = require('express-brute')
const router = express.Router()

const userCtrl = require('../controllers/user')
const bruteforce = require('../middleware/brute')

router.post('/signup', userCtrl.signup)

router.post('/login', bruteforce.prevent, userCtrl.login)

module.exports = router
