// ------------------------------------
// #POSTHTML - JADE
// ------------------------------------

'use strict'

let render = require('jade').render
let compile = require('jade').compile
let parse = require('posthtml-parser')

exports = module.exports = function (options) {
  options = options || {}
  options.filename = options.filename || './index.jade'
  options.pretty = options.pretty || true
  options.debug = options.debug || false
  options.compileDebug = options.compileDebug || true
  options.locals = options.locals || {}

  let locals = options.locals

  return function PostHTMLJade (tree) {
    if (tree.length === 1) {
      if (Object.getOwnPropertyNames(locals).length > 0) {
        console.log(compile(tree, options))
        let template = compile(tree, options)
        tree = parse(template())
      }
      let html = (render(tree, options))
      tree = parse(html)
      return tree
    }
    return tree
  }
}
