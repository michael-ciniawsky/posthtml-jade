# Jade for PostHTML

## Install
```bash
(sudo) npm i -D posthtml-jade
```

## Options

## Usage
For general usage and build process integration see [PostHTML Docs](https://github.com/posthtml/posthtml#usage)

### Example using Node API
#### Default
```js
'use strict'

const fs = require('fs')

const posthtml = require('posthtml')

const jade = require('posthtml-jade')()

let file = fs.readFileSync('./index.html', 'utf-8')

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
