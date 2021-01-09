const express = require('express')
const ExpressBrute = require('express-brute')
const router = express.Router()

const userCtrl = require('../controllers/user')

const store = new ExpressBrute.MemoryStore()
const bruteforce = new ExpressBrute(store)

router.post('/signup', userCtrl.signup)

router.post('/login', userCtrl.login)

module.exports = router
