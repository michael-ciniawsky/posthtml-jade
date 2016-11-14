// ------------------------------------
// #PUG - TEST - INDEX
// ------------------------------------

'use strict'

const test = require('ava')

const read = require('fs').readFileSync
const join = require('path').join

const fixture = (file) => {
  return read(join(__dirname, 'fixtures', file), 'utf8')
}

const expect = (file) => {
  return read(join(__dirname, 'expect', file), 'utf8')
}

function posthtml (options, fix, log) {
  return require('posthtml')([])
    .process(fixture(fix), options)
    .then((result) => {
      if (log) {
        console.log(result.html)
        console.log(result.tree.options)
      }

      return result
    })
}

const pug = require('..')

test('Parser', (t) => {
  const options = { parser: pug() }

  return posthtml(options, 'index.pug', true)
    .then((result) => {
      t.is(expect('index.html'), result.html)
    })
})

test('Parser - Options', (t) => {
  const options = {
    parser: pug({ filename: './fixtures/index.pug', locals: { name: 'Pug' } })
  }

  return posthtml(options, 'index.pug', true)
    .then((result) => {
      t.is(expect('result.html'), result.html)
    })
})
