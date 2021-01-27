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
  console.log(nomFinal)
  expect(nomFinal).toMatch(/^\S+\.(jpg|jpeg|png)$/gi)
})
