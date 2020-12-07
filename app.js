const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const sauceRouter = require('./router/sauce')
const userRouter = require('./router/user')

const app = express()

mongoose
  .connect(
    'mongodb+srv://admin:UbiBQU9DHulsCgml@cluster0.wxmc5.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch(() => console.log('Connexion à MongDB échouée'))

app.use(express.json())
app.use(sauceRouter)
app.use(userRouter)

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  next()
})

module.exports = app
