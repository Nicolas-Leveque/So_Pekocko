const filteringFiles = require('../middleware/filter')

test('should filter files based on extension', () => {
  filename = 'sample.pdf'
  filteringFiles(filename, pdf)
})
