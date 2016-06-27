const jade = require('..')
const fs = require('fs')
const posthtml = require('posthtml')
const test = require('ava')

test('proccesses a basic template', (t) => {
  const src = fs.readFileSync('./index.jade', 'utf8')
  const expected = fs.readFileSync('./expected.html', 'utf8')

  return posthtml([jade({ filename: './index.jade' })])
    .process(src)
    .then((result) => {
      t.is(result.html, expected)
    })
})
