const filter = require('../middleware/filter')

test('filter devrait retourner une erreur', () => {
  function testFilename() {
    filename = 'sample.jpg.pdf'
    filter(filename)
  }
  expect(testFilename).toThrow(new Error('Merci de choisir une image'))
})

test('filter devrait renvoyer un nom de fichier', () => {
  filename = 'image 1.jpg'
  const nomFinal = filter(filename)
  expect(nomFinal).toMatch(/\.(jpg|jpeg|png)$/)
})
