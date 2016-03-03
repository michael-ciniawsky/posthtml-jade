[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Tests][build]][build-url]
[![Coverage][cover]][cover-url]
[![Standard Code Style][style]][style-url]
[![Chat][chat]][chat-badge]

# Pug Parser for PostHTML <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

PostHTML ≥ 0.9.0 allow users to override the parser used for a specific source, through `options` parameter of the `.process` method. This module offers Pug support for PostHTML through the custom parser API.

## Install

```bash
npm i -D posthtml-pug
```

## Options

See [Pug's API](https://pugjs.org/api/reference.html) for a full description of the options that can be passed. Differences for this library:

- The `pretty` option defaults to `true`.
- There is a `locals` option, which provides locals to your template.

## Usage

For general usage and build process integration see [PostHTML Docs](https://github.com/posthtml/posthtml#usage).

```js
const { readFileSync } = require('fs')

const pug = require('posthtml-pug')
const posthtml = require('posthtml')

const file = readFileSync('./index.pug', 'utf8')
const locals = { greeting: 'Hello!' }

posthtml()
  .process(file, { parser: pug({ locals: locals }) })
  .then(({ html }) => console.log(html))
```

### Input

```html
doctype html
html
  head
    meta(charset="utf-8")
    title PostHTML Pug
  body
    h1#title Pug for PostHTML
    p= greeting
```

### Output

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>PostHTML Pug</title>
  </head>
  <body>
    <h1 id="title">Pug for PostHTML</h1>
    <p>Hello!</p>
  </body>
</html>
```

## Maintainers

<table>
  <tbody>
   <tr>
    <td align="center">
      <img width="150 height="150"
      src="https://avatars.githubusercontent.com/u/5419992?v=3&s=150">
      <br />
      <a href="https://github.com/michael-ciniawsky">Michael Ciniawsky</a>
    </td>
    <td align="center">
      <img width="150 height="150"
      src="https://avatars.githubusercontent.com/u/1538624?v=3&s=150">
      <br />
      <a href="https://github.com/TimothyGu">Timothy Gu</a>
    </td>
   </tr>
  <tbody>
</table>

## Contributing

See [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs) and [CONTRIBUTING](CONTRIBUTING.md).

## LICENSE

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/posthtml-pug.svg
[npm-url]: https://npmjs.com/package/posthtml-pug

[deps]: https://david-dm.org/posthtml/posthtml-pug.svg
[deps-url]: https://david-dm.org/posthtml/posthtml-pug

[build]: http://img.shields.io/travis/posthtml/posthtml-pug.svg
[build-url]: https://travis-ci.org/posthtml/posthtml-pug

[cover]: https://coveralls.io/repos/github/posthtml/posthtml-pug/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/posthtml-pug?branch=master

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[chat]: https://badges.gitter.im/posthtml/posthtml.svg
[chat-badge]: https://gitter.im/posthtml/posthtml?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"
