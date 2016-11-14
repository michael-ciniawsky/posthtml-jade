// ------------------------------------
// #PUG - INDEX
// ------------------------------------

const assign = Object.assign

const compile = require('pug').compile
const parse = require('posthtml-parser')

/**
 * @author Michael Ciniawsky (@michael-ciniawsky)
 * @description Pug Parser for PostHTML
 * @license MIT
 *
 * @module posthtml-pug
 * @version 1.0.0
 *
 * @requires pug
 * @requires posthtml-parser
 *
 * @param  {String} pug     Pug Source
 * @param  {Object} options Pug Options
 *
 * @return {Function} HTML
 */
module.exports = function (options) {
  options = assign({ pretty: true, locals: {} }, options)

  /**
   * @method pug
   *
   * @param  {String} src File
   *
   * @return {Object}     PostHTML Tree
   */
  return function pug (src) {
    return parse(compile(src, options)(options.locals))
  }
}
