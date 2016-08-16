const jade = require('..')
const fs = require('fs')
const posthtml = require('posthtml')
const test = require('ava')

test('processes a basic template', t => {
  const src = fs.readFileSync('./index.jade', 'utf8')
  const expected = fs.readFileSync('./expected.html', 'utf8')

  return posthtml()
    .process(src, {
      parser: jade({
        filename: './index.jade',
        locals: { test: 'PostHTML Test' }
      })
    })
    .then(result => {
      t.is(result.html.trim(), expected.trim())
    })
})
