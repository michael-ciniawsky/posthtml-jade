const compile = require('pug').compile
const parse = require('posthtml-parser')

/**
 * @module posthtml-pug
 * @version 1.0.0
 * @author Michael Ciniawsky (@michael-ciniawsky)
 *
 * @desc Pug Parser for PostHTML
 *
 * @requires pug
 * @requires posthtml-parser
 *
 * @method posthtmlPug
 *
 * @param  {String} pug     Pug Source
 * @param  {Object} options Pug Options
 *
 * @return {Function} HTML
 */
module.exports = function posthtmlPug (options) {
  options.pretty = options.pretty || true
  options.locals = options.locals || {}

  return function (pug) {
    return parse(compile(pug, options)(options.locals))
  }
}
