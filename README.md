[![npm](https://badge.fury.io/js/posthtml-jade.svg)](https://badge.fury.io/js/posthtml-jade) [![dependencies](https://david-dm.org/posthtml/posthtml-jade.svg)](https://david-dm.org/posthtml/posthtml-jade)

<img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

# Jade for PostHTML

Wrapper for PostHTML providing all functionality of the Jade templating  language or to use as shorthand syntax for your html.

If input is not a valid jade string but valid html the plugin just returns the html. This means you can use mix jade and html files in your build process (e.g [gulp-posthtml](https://github.com/posthtml/posthtml), [grunt-posthtml](https://github.com/TCotton/grunt-posthtml), [posthtml-loader](https://github.com/michael-ciniawsky/posthtml-loader))

## Install
```
npm i posthtml-jade --save
```

## Options

See [jade's API docs](http://jade-lang.com/api/) for a full description of the options that can be passed. Differences for this library:

- The `pretty` option defaults to `true`.
- There is a `locals` option, which provides locals to your template.

## Usage
For general usage and build process integration see [PostHTML Docs](https://github.com/posthtml/posthtml#usage).

### Example using Node API
#### Default
```js
'use strict'

const fs = require('fs')
const posthtml = require('posthtml')
const jade = require('posthtml-jade')

const file = fs.readFileSync('./index.jade', 'utf8')

posthtml([jade({ locals: { foo: 'bar' } })])
  .process(file)
  .then((result) => console.log(result.html))
```
#### Input
```html
doctype html
html
  head
    meta(charset="utf-8")
    title PostHTML Jade
  body
    h1#title Jade for PostHTML
    p= foo
```
#### Output
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>PostHTML Jade</title>
  </head>
  <body>
    <h1 id="title">Jade for PostHTML</h1>
    <p>bar</p>
  </body>
</html>
```
