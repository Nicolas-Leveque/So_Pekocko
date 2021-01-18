const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const upload = require('../middleware/multer-config')

const sauceCtrl = require('../controllers/sauce')

router.post('/', auth, upload, sauceCtrl.createSauce)
router.put('/:id', auth, upload, sauceCtrl.modifySauce)
router.delete('/:id', auth, sauceCtrl.deleteSauce)
router.get('/:id', auth, sauceCtrl.getOneSauce)
router.get('/', auth, sauceCtrl.getAllSauces)
router.post('/:id/like', auth, sauceCtrl.likesSauce)

module.exports = router
