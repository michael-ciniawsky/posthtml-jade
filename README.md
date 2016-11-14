[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![coverage][cover]][cover-url]
[![code style][style]][style-url]
[![chat][chat]][chat-badge]

<div align="center">
  <img width="200" height="200" title="Pug" src="https://camo.githubusercontent.com/a43de8ca816e78b1c2666f7696f449b2eeddbeca/68747470733a2f2f63646e2e7261776769742e636f6d2f7075676a732f7075672d6c6f676f2f656563343336636565386664396431373236643738333963626539396431663639343639326330632f5356472f7075672d66696e616c2d6c6f676f2d5f2d636f6c6f75722d3132382e737667">
  <img width="220" height="200" title="PostHTML" hspace="20"     src="http://posthtml.github.io/posthtml/logo.svg">
  <h1>Pug</h1>
  <p>Parser for PostHTML</p>
</div>

<h2 align="center">Install</h2>

```bash
npm i -D posthtml-pug
```

<h2 align="center">Usage</h2>

```js
import { readFileSync } from ('fs')

import pug from 'posthtml-pug'
import posthtml from 'posthtml'

const file = readFileSync('./index.pug', 'utf8')

posthtml()
  .process(file, { parser: pug({ locals: {} }) })
  .then((result) => console.log(result.html))
```

<h2 align="center">Options</h2>

See the [Pug API](https://pugjs.org/api/reference.html) for a full description of the options that can be passed.
By default the following options are set:

|Name|Default|
|:--:|:-----:|
|**`pretty`**|`true`|
|**`locals`**|`{}`|

<h2 align="center">Example</h2>

**index.pug**
```
doctype html
html
  head
    meta(charset="utf8")
    title Pug Parser
  body
    h1#title Pug for PostHTML
    p= greeting
```

### <img width="80" height="80" src="https://worldvectorlogo.com/logos/nodejs-icon.svg">

```js
import { readFileSync } from ('fs')

import pug from 'posthtml-pug'
import posthtml from 'posthtml'

const file = readFileSync('./index.pug', 'utf8')
const locals = { greeting: 'Hello!' }

posthtml()
  .process(file, { parser: pug({ locals: locals }) })
  .then((result) => console.log(result.html))
```

**index.html**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Pug Parser</title>
  </head>
  <body>
    <h1 id="title">Pug for PostHTML</h1>
    <p>Hello!</p>
  </body>
</html>
```

<h2 align="center">Maintainer</h2>

<table>
  <tbody>
   <tr>
    <td align="center">
      <img width="150 height="150"
      src="https://avatars.githubusercontent.com/u/5419992?v=3&s=150">
      <br />
      <a href="https://github.com/michael-ciniawsky">Michael Ciniawsky</a>
    </td>
   </tr>
  <tbody>
</table>

<h2 align="center">Contributors</h2>

<table>
  <tbody>
   <tr>
    <td align="center">
      <img width="150 height="150"
      src="https://avatars.githubusercontent.com/u/556932?v=3&s=150">
      <br />
      <a href="https://github.com/jescalan">Jeff Escalante</a>
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

[npm]: https://img.shields.io/npm/v/posthtml-pug.svg
[npm-url]: https://npmjs.com/package/posthtml-pug

[node]: https://img.shields.io/node/v/posthtml-load-options.svg
[node-url]: https://nodejs.org/

[deps]: https://david-dm.org/posthtml/posthtml-pug.svg
[deps-url]: https://david-dm.org/posthtml/posthtml-pug

[tests]: http://img.shields.io/travis/posthtml/posthtml-pug.svg
[tests-url]: https://travis-ci.org/posthtml/posthtml-pug

[cover]: https://coveralls.io/repos/github/posthtml/posthtml-pug/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/posthtml-pug?branch=master

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[chat]: https://badges.gitter.im/posthtml/posthtml.svg
[chat-badge]: https://gitter.im/posthtml/posthtml?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"
