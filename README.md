<img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

# Jade for PostHTML

Wrapper for PostHTML providing all functionality of the Jade templating  language or to use as shorthand syntax for your html.

If input is not a valid jade string but valid html the plugin just returns the html. This means you can use both jade and html files in your build process(e.g [gulp-posthtml](https://github.com/posthtml/posthtml), [grunt-posthtml](https://github.com/TCotton/grunt-posthtml), [posthtml-loader](https://github.com/michael-ciniawsky/posthtml-loader))

## Install
```
(sudo) npm i -D posthtml-jade
```
[![npm](https://badge.fury.io/js/posthtml-jade.svg)](https://badge.fury.io/js/posthtml-jade) [![dependencies](https://david-dm.org/michael-ciniawsky/posthtml-jade.svg)](https://david-dm.org/michael-ciniawsky/posthtml-jade)

## Options

##### doctype: [string]

If the doctype is not specified as part of the template, you can specify it here. It is sometimes useful to get self-closing tags and remove mirroring of boolean attributes.

##### pretty: [boolean | string]

Adds whitespace to the resulting html to make it easier for a human to read using '  ' as indentation. If a string is specified, that will be used as indentation instead (e.g. '\t').

###### self: [boolean]

Use a self namespace to hold the locals (false by default).

###### debug: [boolean]

If set to true, the tokens and function body is logged to stdout.

###### compileDebug: [boolean]

If set to true, the function source will be included in the compiled template for better error messages (sometimes useful in development). It is enabled by default unless used with express in production mode.

## Usage
For general usage and build process integration see [PostHTML Docs](https://github.com/posthtml/posthtml#usage).

### Example using Node API
#### Default
```js
'use strict'

const fs = require('fs')

const posthtml = require('posthtml')

const jade = require('posthtml-jade')()

let file = fs.readFileSync('./index.html', 'utf8')

posthtml([ jade ])
  .process(file)
  .then(result => console.log(result.html))
```
##### Input
```html
doctype html
html
  head
    meta(charset="utf-8")
    title PostHTML Jade
  body
    h1(id="title") Jade for PostHTML
```
##### Output
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>PostHTML Jade</title>
  </head>
  <body>
    <h1 id="title">Jade for PostHTML</h1>
  </body>
</html>
```
