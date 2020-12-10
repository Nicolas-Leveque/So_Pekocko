const Sauce = require('../models/sauce')

exports.createSauce = async (req, res) => {
  const sauce = new Sauce(req.body)
  try {
    await sauce.save()
    res.send(sauce)
  } catch (e) {
    res.status(500).send(e)
  }
}

exports.modifySauce = async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = [
    'userID',
    'name',
    'manufacturer',
    'description',
    'mainingredient',
    'imageUrl',
    'heat',
    'likes',
    'dislikes',
    'usersliked',
    'usersdisliked',
  ]
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  )
  if (!isValidOperation) {
    res.status(400).send('Invalid update')
  }
  try {
    const sauce = await Sauce.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    if (!sauce) {
      res.status(404).send()
    }
    res.send(sauce)
  } catch (e) {
    res.status(500).send(e)
  }
}

exports.deleteSauce = async (req, res) => {
  try {
    await Sauce.findByIdAndDelete(req.params.id)
    if (!sauce) {
      res.status(404).send()
    }
    res.send(sauce)
  } catch (e) {
    res.status(500).send(e)
  }
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
