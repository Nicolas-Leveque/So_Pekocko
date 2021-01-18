const filterFiles = (filename, ext) => {
  if (!filename.match(/\.(jpg|jpeg|png)$/)) {
    throw new Error('Merci de choisir une image')
  }
  const name = filename.split(' ').join('_')
  const newName = name + Date.now() + '.' + ext
  console.log(newName)
  return newName
}

module.exports = filterFiles
