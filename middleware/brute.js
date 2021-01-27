const ExpressBrute = require('express-brute')
const mongooseStore = require('express-brute-mongoose')
const bruteForceSchema = require('express-brute-mongoose/dist/schema')
const mongoose = require('mongoose')

const model = mongoose.model(
  'bruteforce',
  new mongoose.Schema(bruteForceSchema)
)

const store = new mongooseStore(model)

const failcallback = function (req, res, next, nextValidRequestDate) {
  req.flash(
    'error',
    'Vous avez fait trop de requêtes, veuillez patienter' +
      moment(nextValidRequestDate).fromNow()
  )
  res.redirect('/login')
}

const bruteforce = new ExpressBrute(store, {
  freeretries: 10,
  attachResetToRequest: false,
  refreshTimeoutOnRequest: false,
  minWait: 5 * 60 * 1000, // 5 minutes
  maxWait: 60 * 60 * 1000, // 1 hour
})

module.exports = bruteforce
