const express = require('express')
const router = express.Router()
const validateEmail = require('../middleware/validate-email')

const userCtrl = require('../controllers/user')
const bruteforce = require('../middleware/brute')

router.post('/signup', validateEmail, userCtrl.signup)

router.post('/login', bruteforce.prevent, userCtrl.login)

module.exports = router
