// ------------------------------------
// #POSTHTML - JADE
// ------------------------------------

'use strict'

let jade = require('jade')
let parse = require('posthtml-parser')

exports = module.exports = function (options) {
  options = options || {}
  options.pretty = options.pretty || true
  options.locals = options.locals || {}

  return function PostHTMLJade (tree) {
    if (tree.length === 1) {
      tree = parse(jade.render(tree, options))
      return tree
    }
    return tree
  }
}
