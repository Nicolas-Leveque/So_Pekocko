const fs = require('fs')
const Sauce = require('../models/sauce')

exports.createSauce = async (req, res) => {
  try {
    const sauceObject = JSON.parse(req.body.sauce)
    // delete sauceObject._id
    const sauce = new Sauce({
      ...sauceObject,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${
        req.file.filename
      }`,
    })

    await sauce.save()
    res.status(201).send({ message: 'Sauce enregistrée' })
  } catch (e) {
    res.status(500).send(e)
  }
}

exports.modifySauce = async (req, res) => {
  try {
    const sauceObject = req.file
      ? {
          ...JSON.parse(req.body.sauce),
          imageUrl: `${req.protocol}://${req.get('host')}/images/${
            req.file.filename
          }`,
        }
      : { ...req.body }

    const sauce = await Sauce.updateOne(
      { _id: req.params.id },
      { ...sauceObject, _id: req.params.id }
    )
    if (!sauce) {
      res.status(404).send()
    }
    res.send({ message: 'Sauce modifiée' })
  } catch (e) {
    res.status(500).send(e)
  }
}

exports.deleteSauce = async (req, res) => {
  Sauce.findOne({ _id: req.params.id })
    .then((sauce) => {
      const filename = sauce.imageUrl.split('/images/')[1]
      fs.unlink(`images/${filename}`, () => {
        Sauce.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'sauce supprimée' }))
          .catch((error) => res.status(400).json({ error }))
      })
    })
    .catch((error) => res.status(500).json({ error }))
}

exports.getOneSauce = async (req, res) => {
  try {
    const sauce = await Sauce.findById(req.params.id)
    if (!sauce) {
      res.status(404).send()
    }
    res.send(sauce)
  } catch (e) {
    res.status(500).send(e)
  }
}

exports.getAllSauces = async (req, res) => {
  try {
    const sauce = await Sauce.find()
    res.send(sauce)
  } catch (e) {
    res.status(500).send()
  }
}

exports.likesSauce = async (req, res) => {
  try {
    console.log(req.body)
  } catch {}
}
