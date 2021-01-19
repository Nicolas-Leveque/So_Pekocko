const filter = require('../middleware/filter')

test('filter devrait retourner une erreur', () => {
  function testFilename() {
    filename = 'sample.pdf'
    filter(filename)
  }
  expect(testFilename).toThrow(new Error('Merci de choisir une image'))
})

test('filter devrait renvoyer un nom de fichier', () => {
  filename = 'image 1.jpg'
  const nomFinal = filter(filename)
  expect(nomFinal).stringContaining('.image_1.jpg').toBeTruthy()
})
