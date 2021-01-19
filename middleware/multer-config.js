const multer = require('multer')
const filterFiles = require('../middleware/filter')

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images')
  },
  filename: (req, file, callback) => {
    const newName = filterFiles(file.originalname)
    callback(null, newName)
  },
})

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000,
  },
}).single('image')

module.exports = upload
