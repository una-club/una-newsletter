const base64Img = require('base64-img');
const marked = require('marked');
const Mustache = require('mustache');
const fs = require('fs')
const dateconv = require('date-and-time')

dateconv.locale('fr');
let now = new Date()
const date = dateconv.format(now, 'D MMMM YYYY')
const datestr = dateconv.format(now, 'YYYYMMDDhhmmss')
