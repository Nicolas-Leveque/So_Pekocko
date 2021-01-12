const ExpressBrute = require('express-brute')
const mongooseStore = require('express-brute-mongoose')
const bruteForceSchema = require('express-brute-mongoose/dist/schema')
const mongoose = require('mongoose')

const model = mongoose.model(
  'bruteforce',
  new mongoose.Schema(bruteForceSchema)
)

const store = new mongooseStore(model)

const bruteforce = new ExpressBrute(store)

module.exports = bruteforce
