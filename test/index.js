const fs = require('fs')
const test = require('ava')

const posthtml = require('posthtml')
const pug = require('..')

test('1 - Process basic template', (t) => {
  const fixtures = fs.readFileSync('./fixtures/index.pug', 'utf8')
  const expected = fs.readFileSync('./expect/index.html', 'utf8')

  const options = {
    parser: pug({
      filename: './fixtures/index.pug',
      locals: { test: 'PostHTML Pug' }
    })
  }

  return posthtml()
    .process(fixtures, options)
    .then((result) => t.is(result.html.trim(), expected.trim()))
})
