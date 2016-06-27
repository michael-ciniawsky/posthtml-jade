'use strict'

const {compile} = require('jade')
const parse = require('posthtml-parser')

module.exports = function (opts) {
  opts = opts || {}
  opts.pretty = opts.pretty || true
  opts.locals = opts.locals || {}

  return function PostHTMLJade (tree) {
    return tree.length === 1 ? parse(compile(tree, opts)(opts.locals)) : tree
  }
}
