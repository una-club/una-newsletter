const base64Img = require('base64-img');
const marked = require('marked');
const Mustache = require('mustache');
const fs = require('fs')
const dateconv = require('date-and-time')

dateconv.locale('fr');
let now = new Date()
const date = dateconv.format(now, 'DD MMMM YYYY')

template = fs.readFileSync('src/template.html')
api_key_env   = process.env.MAILGUN_TOKEN;

var api_key = api_key_env
var domain = 'mail.una-club.fr';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});


var data = {
  from: 'UNA Communication <support@una-club.fr>',
  to: 'system@mail.una-club.fr',
  subject: '[UNA] Newsletter du ' + date,
  html: template.toString().replace(/(?:\r\n|\r|\n)/g, '')
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
