let express = require('express');
let fs = require('fs');
let request = require('request');
let cheerio = require('cheerio');

let app = express();

app.get('/scrape', (req, res) => {

  // Web scraping logic here

});

app.listen('8080');

console.log('Test on port 8080');

exports = module.exports = app;
