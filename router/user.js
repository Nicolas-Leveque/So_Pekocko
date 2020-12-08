const express = require('express')
const { route } = require('../app')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const router = new express.Router()

router.post('/api/auth/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    res.send(user)
  } catch (e) {
    res.status(400).send()
  }
})

// router.post('/api/users', async (req, res) => {
//   const user = new User(req.body)
//   try {
//     await user.save()
//     res.send(user)
//   } catch (e) {
//     res.status(500).send(e)
//   }
// })

// router.put('/api/users/:id', async (req, res) => {
//   const updates = Object.keys(req.body)
//   const allowedUpdates = ['email', 'password']
//   const isValidOperation = updates.every((update) =>
//     allowedUpdates.includes(update)
//   )
//   if (!isValidOperation) {
//     res.status(400).send('Invalid update')
//   }
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     })
//     if (!user) {
//       res.status(404).send()
//     }
//     res.send(user)
//   } catch (e) {
//     res.status(500).send(e)
//   }
// })

// router.delete('/api/users/:id', async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id)
//     if (!user) {
//       res.status(404).send()
//     }
//     res.send(user)
//   } catch (e) {
//     res.status(500).send(e)
//   }
// })

// router.get('/api/users/:id', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id)
//     if (!user) {
//       res.status(404).send()
//     }
//     res.send(user)
//   } catch (e) {
//     res.status(500).send(e)
//   }
// })

// router.get('/api/users', async (req, res) => {
//   try {
//     const user = await User.find()
//     res.send(user)
//   } catch (e) {
//     res.status(500).send(e)
//   }
// })

module.exports = router
