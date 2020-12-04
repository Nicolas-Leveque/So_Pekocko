const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

mongoose
  .connect(
    'mongodb+srv://admin:UbiBQU9DHulsCgml@cluster0.wxmc5.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch(() => console.log('Connexion à MongDB échouée'))

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

app.post('/api/sauces', (req, res, next) => {
  console.log(req.body)
  res.status(201).json({ message: 'Sauces ajoutée' })
})

app.get('/api/sauces', (req, res) => {
  console.log('requête ok')
  res.status(200).json({ message: 'requete ok' })
})

module.exports = app
