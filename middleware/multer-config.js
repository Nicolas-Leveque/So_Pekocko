const multer = require('multer')
const filteringFiles = require('../middleware/filter')

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images')
  },
  filename: (req, file, callback) => {
    const extension = MIME_TYPES[file.mimetype]
    const newName = filteringFiles(file.originalname, extension)
    callback(null, newName)
  },
})

// const filteringFiles = (filename, ext) => {
//   if (!filename.match(/\.(jpg|jpeg|png)$/)) {
//     throw new Error('Merci de choisir une image')
//   }
//   const name = filename.split(' ').join('_')
//   const newName = name + Date.now() + '.' + ext
//   return newName
// }

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000,
  },
}).single('image')

module.exports = upload
