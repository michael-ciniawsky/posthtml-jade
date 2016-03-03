'use strict'

const fs = require('fs')

const posthtml = require('posthtml')

const jade = require('../index')({debug: true, pretty: false})

let html = fs.readFileSync('./index.jade', 'utf8')

posthtml([ jade ])
  .process(html)
  .then(result => {
    console.log(result.tree)
    console.log(result.html)
    fs.writeFileSync('./result.html', result.html, 'utf8')
  })
