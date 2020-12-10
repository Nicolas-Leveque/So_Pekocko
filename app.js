const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const sauceRouter = require('./router/sauce')
const userRouter = require('./router/user')

const app = express()

mongoose
  .connect(
    'mongodb+srv://admin:UbiBQU9DHulsCgml@cluster0.wxmc5.mongodb.net/so_pekocko?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connection to MongoDB successful'))
  .catch(() => console.log('Connection to MongDB failed'))

app.use(express.json())

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

app.use(bodyParser.json())
app.use('/api/sauces', sauceRouter)
app.use('/api/auth', userRouter)

module.exports = app
