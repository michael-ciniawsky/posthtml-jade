// ------------------------------------
// #POSTHTML - JADE
// ------------------------------------

'use strict'

let render = require('jade').render
let compile = require('jade').compile
let parse = require('posthtml-parser')

exports = module.exports = function (options) {
  options = options || {}
  options.pretty = options.pretty || true
  options.locals = options.locals || {}

  let locals = options.locals

  return function PostHTMLJade (tree) {
    if (tree.length === 1) {
      if (Object.getOwnPropertyNames(locals).length > 0) {
        let template = compile(tree, options)
        tree = parse(template({test: 'Hello!'}))
      }
      tree = parse(render(tree, options))
      return tree
    }
    return tree
  }
}
