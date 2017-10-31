var base64Img = require('base64-img');

var marked = require('marked');

var Mustache = require('mustache');

const fs = require('fs')

content = fs.readFileSync('src/template.html')
api_key_env   = process.env.MAILGUN_TOKEN;

var api_key = api_key_env
var domain = 'mail.una-club.fr';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});


var data = {
  from: 'UNA Communication <support@una-club.fr>',
  to: 'system@mail.una-club.fr',
  subject: '[UNA] Newsletter du 1 Novembre',
  html: content.toString().replace(/(?:\r\n|\r|\n)/g, '')
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
