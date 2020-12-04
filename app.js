const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const sauce = require('./models/sauce')

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
  const sauce = new sauce({
    ...req.body
  });
  sauce.save()
    .then(() => res.status(201).json({ message: 'Sauce ajoutée'}))
    .catch(error => res.status(400).json({ error }));
});

app.get('/api.sauces/:id', (req, res, next) => {
  sauce.findOne({ _id: req.params.id })
  .then(sauce => res.status(200).json(sauce))
  .catch(error => res.status(400).json({ error }));
})

app.get('/api/sauces', (req, res) => {
  sauce.find()
    .then(sauces => res.status(200).json(sauces))
    .catch(error => res.status(404).json({ error }));
});

module.exports = app
