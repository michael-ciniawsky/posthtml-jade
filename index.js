'use strict'

const isObject = require('isobject')
const objectAssign = require('object-assign')
const {compile} = require('jade')
const parse = require('posthtml-parser')

const defaultOptions = {
  pretty: true,
  locals: {}
}

function postHTMLJadeParser (jade, options) {
  return parse(compile(jade, options)(options.locals))
}

function parserWrapper (jade, options) {
  if (isObject(jade)) {
    options = objectAssign({}, defaultOptions, jade)
    return function (jade) {
      return postHTMLJadeParser(jade, options)
    }
  }

  options = objectAssign({}, defaultOptions, options)
  return postHTMLJadeParser(jade, options)
}

module.exports = parserWrapper
module.exports.defaultOptions = defaultOptions
