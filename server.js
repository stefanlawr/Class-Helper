let express = require('express');
let fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');

let app = express();

app.get('/scrape', (req, res) => {


});

app.listen('8080');

console.log('Test on port 8080');

exports = module.exports = app;
