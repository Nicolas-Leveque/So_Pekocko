const filterFiles = (filename) => {
  if (!filename.match(/\.(jpg|jpeg|png)$/)) {
    throw new Error('Merci de choisir une image')
  }
  const name = filename.split(' ').join('_')
  const newName = Date.now() + '.' + name
  return newName
}

module.exports = filterFiles
