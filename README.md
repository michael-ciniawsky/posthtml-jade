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

## Caveats

There are a few ways that this plugin doesn't behave exactly like compiling with jade normally, detailed below.

### Raw HTML

This plugin will not process jade if there is any normal html in the template alongside the jade content. For example:

```jade
p here's an <a href='#'>inline link</a> for you!
```

While this is valid jade, and will compile correctly when using jade directly, it will not work with this plugin, and will return uncompiled code, with no error. In order to get around this, make sure to use native jade constructs and local functions for situations in which you need html directly in your templates. For the example above, the fix would be:

```jade
p here's an #[a(href='#') inline link] for you!
```

If you are having an issue in which this plugin appears to not be compiling your jade code, make sure to look for raw html in your templates and convert or abstract it to a local!

### JSON.stringify html from locals

This is a very niche use case, but is a situation in which this plugin behaves differently, so is worth noting. If you `JSON.stringify` a string that includes raw html and inject this into your jade template, it will be incorrectly escaped. For example, this would not render as valid JSON:

```jade
!= JSON.stringify({ link: '<a href="#">test link</a>' })
```

While this could be fixed with a regex in order to fix the escaping issue, if you just pulled the contents of the file and ran them through `JSON.parse` you would get an error.
